import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { Paper } from '@mui/material';
import resume from '../assets/resume.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const ExperiencePage = () => {
  return (
    <div class="flex flex-col justify-center items-center">
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
    </div>
  );
};

export default ExperiencePage;
