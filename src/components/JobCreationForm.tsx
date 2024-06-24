import {FC, useState, MouseEvent, ChangeEvent} from 'react';
import {JobCreationFormData} from '../interface/form';

import {FormContainer} from '../styled/FormContainer';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from '@mui/material';

interface TaskCreationFormProps {
  handleTaskCreation: (formData: JobCreationFormData) => void;
  onClickSecondaryAction: () => void;
}

export const JobCreationForm: FC<TaskCreationFormProps> = ({
  handleTaskCreation,
  onClickSecondaryAction,
}) => {
  const [formData, SetFormData] = useState<JobCreationFormData>({
    jobName: {
      value: '',
      helperText: '',
    },
    requiredTime: {
      value: '',
      helperText: '',
    },
  });

  const onClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleTaskCreation(formData);
    // Add your form submission logic here
  };

  const handleFormValueChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    dataKey: string
  ) => {
    if (dataKey in formData) {
      SetFormData({
        ...formData,
        [dataKey]: {
          value: e.target.value,
          helperText: formData[dataKey]['helperText'],
        },
      });
    }
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h3"> Create New Job</Typography>
      <FormControl>
        <InputLabel htmlFor="task-name-input">Task Name</InputLabel>
        <Input
          id="task-name-input"
          aria-describedby="task-creation-helper-text"
          onChange={(e) => handleFormValueChange(e, 'jobName')}
        />
        <FormHelperText id="task-creation-helper-text">
          {formData['jobName']['helperText']}
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="task-time-input">Required Time</InputLabel>
        <Input
          id="task-time-input"
          aria-describedby="task-time-helper-text"
          onChange={(e) => handleFormValueChange(e, 'requiredTime')}
        />
        <FormHelperText id="task-time-helper-text">
          {formData['requiredTime']['helperText']}
        </FormHelperText>
      </FormControl>
      <div className="form-actions">
        <Button variant="outlined" onClick={onClickSecondaryAction}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onClickSubmit}>
          Submit
        </Button>
      </div>
    </FormContainer>
  );
};
