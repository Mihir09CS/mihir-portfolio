import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const assertEmailConfiguration = () => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('Missing EmailJS environment variables.');
  }
};

export const sendContactEmail = async ({ name, email, message }) => {
  assertEmailConfiguration();

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name,
      email,
      message,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  );
};

export const hasEmailConfiguration = () => Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
