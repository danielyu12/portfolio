import React from 'react';
import Location from '@iconscout/react-unicons/icons/uil-map-marker';
import Phone from '@iconscout/react-unicons/icons/uil-phone';
import Email from '@iconscout/react-unicons/icons/uil-envelope';

const ContactInformation = () => {
  return (
    <div class="flex flex-col justify-center h-[40vh] flex-1 ">
      <h2 class="font-league text-4xl font-semibold mb-10">Contact Me</h2>
      <div class="flex flex-col justify-between h-3/4">
        <div class="flex flex-row align-center">
          <Location color="rgb(55 65 81)" size="1.75rem" />
          <h3 class="font-league text-gray-700 ml-10 text-xl">
            Boston, Massachusetts
          </h3>
        </div>
        <div class="flex flex-row align-center">
          <Phone color="rgb(55 65 81)" size="1.75rem" />
          <h3 class="font-league text-gray-700 ml-10 text-xl">
            (860) 736-7560
          </h3>
        </div>
        <div class="flex flex-row align-center">
          <Email color="rgb(55 65 81)" size="1.75rem" />
          <h3 class="font-league text-gray-700 ml-10 text-xl">danyu@bu.edu</h3>
        </div>
        <div class="flex flex-row align-center">
          <Email color="rgb(55 65 81)" size="1.75rem" />
          <h3 class="font-league text-gray-700 ml-10 text-xl">
            dan.daniel.yu@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
