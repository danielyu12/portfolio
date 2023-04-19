import React from 'react';
import ContactForm from '../components/ContactPageComponents/ContactForm';
import ContactInformation from '../components/ContactPageComponents/ContactInformation';

const ContactPage = () => {
  return (
    <div class="flex flex-row items-center justify-center w-full h-1/2 mt-16 mb-10 animate-fade-in-up">
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
