import { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { hasEmailConfiguration, sendContactEmail } from '../services/emailService';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  message: '',
};

const SUCCESS_RESET_DELAY = 2800;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (name, value) => {
  const trimmedValue = value.trim();

  switch (name) {
    case 'name':
      if (!trimmedValue) return 'Name is required.';
      if (trimmedValue.length < 2) return 'Name must be at least 2 characters.';
      return '';
    case 'email':
      if (!trimmedValue) return 'Email is required.';
      if (!EMAIL_PATTERN.test(trimmedValue)) return 'Enter a valid email address.';
      return '';
    case 'message':
      if (!trimmedValue) return 'Message is required.';
      if (trimmedValue.length < 15) return 'Message must be at least 15 characters.';
      return '';
    default:
      return '';
  }
};

const validateForm = (formData) =>
  Object.entries(formData).reduce((accumulator, [field, value]) => {
    const error = validateField(field, value);
    if (error) {
      accumulator[field] = error;
    }
    return accumulator;
  }, {});

export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const successTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const isSubmitting = status === 'sending';
  const isSuccess = status === 'success';
  const isDisabled = isSubmitting;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (touched[name] || errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  };

  const resetSuccessState = () => {
    if (successTimeoutRef.current) {
      window.clearTimeout(successTimeoutRef.current);
    }

    successTimeoutRef.current = window.setTimeout(() => {
      setStatus('idle');
    }, SUCCESS_RESET_DELAY);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors = validateForm(formData);
    setTouched({
      name: true,
      email: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      toast.error('Please fix the highlighted fields before sending.', {
        duration: 3200,
      });
      resetSuccessState();
      return;
    }

    if (!hasEmailConfiguration()) {
      console.error('EmailJS configuration is incomplete.');
      setStatus('error');
      toast.error('Contact form is not configured yet. Please try again later.', {
        duration: 4200,
      });
      resetSuccessState();
      return;
    }

    setStatus('sending');

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      setTouched({});

      toast.success("Message sent successfully!\nThanks for reaching out.\nI'll get back to you soon.", {
        duration: 4500,
      });

      resetSuccessState();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('error');

      toast.error('Failed to send message.\nPlease try again later.', {
        duration: 4200,
      });

      resetSuccessState();
    }
  };

  const submitLabel = useMemo(() => {
    if (isSubmitting) return 'Sending...';
    if (isSuccess) return 'Message Sent';
    return 'Send Message';
  }, [isSubmitting, isSuccess]);

  return {
    errors,
    formData,
    handleBlur,
    handleChange,
    handleSubmit,
    isDisabled,
    isSubmitting,
    isSuccess,
    status,
    submitLabel,
    touched,
  };
};
