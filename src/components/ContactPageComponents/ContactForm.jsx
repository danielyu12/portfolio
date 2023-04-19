import React, { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_oqjw8ao',
        'template_6c460g3',
        formRef.current,
        'na4Xcn1E2on9vOvqI'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="flex-1 w-full h-[40vh]">
      <h3 class="font-league text-4xl font-semibold mb-5">Reach Out</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        class="flex flex-col justify-between h-3/4"
      >
        <TextField
          label="Full Name"
          variant="standard"
          inputProps={{
            style: { fontFamily: 'League Spartan, sans-serif', fontSize: 20 },
          }}
          InputLabelProps={{
            style: { fontFamily: 'League Spartan, sans-serif', fontSize: 20 },
          }}
        />
        <TextField
          label="Email Address"
          variant="standard"
          inputProps={{
            style: {
              fontFamily: 'League Spartan, sans-serif',
              fontSize: 20,
            },
          }}
          InputLabelProps={{
            style: { fontFamily: 'League Spartan, sans-serif', fontSize: 20 },
          }}
        />

        <TextField
          label="Message"
          variant="standard"
          inputProps={{
            style: { fontFamily: 'League Spartan, sans-serif', fontSize: 20 },
          }}
          InputLabelProps={{
            style: { fontFamily: 'League Spartan, sans-serif', fontSize: 20 },
          }}
          multiline={true}
        />

        <div class="w-full flex justify-center">
          <button
            class="font-league p-2 w-3/4 bg-black text-white rounded-full"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
