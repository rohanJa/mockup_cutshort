import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import StepIcon from '@mui/material/StepIcon';
import { StepConnector } from '@mui/material';
import PageContext from '../context/context';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
  'Create ad',
];

export default function Timeline() {
  const {pageNumber} = React.useContext(PageContext);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={pageNumber} alternativeLabel>
        {steps.map((label,index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
