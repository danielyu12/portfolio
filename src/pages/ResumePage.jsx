import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const ResumePage = () => {
  return (
    <div class="flex flex-col justify-center items-center animate-fade-in-up">
      <h2 class="w-1/2 my-5">
        View or download my resume{' '}
        <a
          href="https://drive.google.com/file/d/1zQWv5pD9A_n3nq0FWwMVWJ_WTe2HbuLQ/view"
          class="font-semibold"
        >
          here
        </a>
      </h2>
      <Paper>
        <Document file={resume}>
          <Page pageNumber={1} renderAnnotationLayer={false} />
        </Document>
      </Paper>
      <Link
        to="/contact"
        class="text-lg font-semibold font-league cursor-pointer mt-5 inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
      >
        Are you convinced to contact me now?
      </Link>
    </div>
  );
};

export default ResumePage;
