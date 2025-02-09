<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <p class="contact-form__title">{{ $t("contactFormTitle") }}</p>
    <div class="contact-form__group">
      <label for="name" class="contact-form__group__label"
        >{{ $t("contactName") }} *</label
      >
      <input
        type="text"
        id="name"
        v-model="formData.name"
        class="contact-form__group__input"
        :placeholder="$t('contactNamePlaceholder')"
        :class="{ error: errors.name }"
        @input="clearError('name')"
      />
      <span v-if="errors.name" class="contact-form__error-message">{{
        errors.name
      }}</span>
    </div>

    <div class="contact-form__group">
      <label for="email" class="contact-form__group__label"
        >{{ $t("contactEmail") }} *</label
      >
      <input
        type="email"
        id="email"
        v-model="formData.email"
        class="contact-form__group__input"
        :placeholder="$t('contactEmailPlaceholder')"
        :class="{ error: errors.email }"
        @input="clearError('email')"
      />
      <span v-if="errors.email" class="contact-form__error-message">{{
        errors.email
      }}</span>
    </div>

    <div class="contact-form__group">
      <label for="subject" class="contact-form__group__label"
        >{{ $t("contactSubject") }} *</label
      >
      <input
        type="text"
        id="subject"
        v-model="formData.subject"
        class="contact-form__group__input"
        :placeholder="$t('contactSubjectPlaceholder')"
        :class="{ error: errors.subject }"
        @input="clearError('subject')"
      />
      <span v-if="errors.subject" class="contact-form__error-message">{{
        errors.subject
      }}</span>
    </div>

    <div class="contact-form__group">
      <label for="message" class="contact-form__group__label"
        >{{ $t("contactContent") }} *</label
      >
      <textarea
        id="message"
        v-model="formData.message"
        class="contact-form__group__input"
        :placeholder="$t('contactContentPlaceholder')"
        :class="{ error: errors.message }"
        @input="clearError('message')"
      ></textarea>
      <span v-if="errors.message" class="contact-form__error-message">{{
        errors.message
      }}</span>
    </div>
    <div class="contact-form__group">
      <p>{{ $t("contactObligatoryFields") }}</p>
    </div>
    <div
      v-if="message.text"
      :class="[
        'contact-form__message',
        message.success
          ? 'contact-form__message--success'
          : 'contact-form__message--error',
      ]"
    >
      <p>{{ message.text }}</p>
    </div>

    <div class="contact-form__buttons">
      <button
        type="submit"
        class="contact-form__buttons__submit-button btn"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">{{ $t("contactSending") }}</span>
        <span v-else>{{ $t("contactSubmit") }}</span>
      </button>
      <button
        type="button"
        class="contact-form__buttons__reset-button"
        @click="resetForm"
        :disabled="isSubmitting"
      >
        {{ $t("contactReset") }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const serviceId = "service_x6gly5u";
const templateId = "template_8mzb6ce";
const publicKey = "s4uW7aPobRf6Pupmi";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({});
const isSubmitting = ref(false);
const message = ref({ text: "", success: true });

const validateForm = () => {
  errors.value = {};

  if (!formData.value.name.trim()) {
    errors.value.name = t("contactValidateName");
  }
  if (!formData.value.email.trim()) {
    errors.value.email = t("contactValidateRequiredEmail");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = t("contactValidateEmail");
  }
  if (!formData.value.subject.trim()) {
    errors.value.subject = t("contactValidateSubject");
  }
  if (!formData.value.message.trim()) {
    errors.value.message = t("contactValidateContent");
  }

  return Object.keys(errors.value).length === 0;
};

const clearError = (field) => {
  if (errors.value[field]) {
    delete errors.value[field];
  }
};

const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  const templateParams = {
    name: formData.value.name,
    email: formData.value.email,
    subject: formData.value.subject,
    message: formData.value.message,
  };

  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then(
      () => {
        message.value = {
          text: t("contactSendEmailSuccessfully"),
          success: true,
        };
        resetForm();
      },
      (error) => {
        console.error("Failed to send email.", error);
        message.value = {
          text: t("contactSendEmailError"),
          success: false,
        };
      }
    )
    .finally(() => {
      isSubmitting.value = false;

      setTimeout(() => {
        message.value.text = "";
      }, 5000);
    });
};

const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  errors.value = {};
};
</script>

<style scoped lang="scss">
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: $gray-color;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 22px;
    line-height: 26px;
    font-weight: 500;
    align-self: center;
    margin-bottom: 1rem;

    @media (min-width: $md-screen) {
      font-size: 26px;
      line-height: 32px;
    }

    @media (min-width: $lg-screen) {
      font-size: 32px;
      line-height: 38px;
      text-align: left;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;

    &__label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    &__input {
      padding: 1rem;
      border: none;
      border-radius: 10px;
      font-size: 1rem;

      &:focus {
        outline: 2px solid $primary-color;
      }
    }
  }

  &__error-message {
    color: red;
    font-size: 14px;
    margin-top: 0.5rem;
  }

  &__message {
    transition: opacity 0.5s ease;

    &--success {
      color: #155724;
    }

    &--error {
      color: red;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 1rem;

    &__reset-button {
      border: none;
      font-size: 18px;
      line-height: 22px;
      cursor: pointer;
      font-weight: 600;
      color: $primary-color;
      background-color: transparent;
      border: 2px solid $primary-color;
      border-radius: 30px;
      padding: 15px 50px;

      &:hover {
        background-color: $primary-color;
        color: #fff;
      }
    }

    &__submit-button {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media (min-width: $sm-screen) {
      flex-direction: row;
    }
  }
}
</style>
