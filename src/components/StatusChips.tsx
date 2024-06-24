import {Chip} from '@mui/material';

export const StatusChips = {
  running: <Chip label="Running" color="info" variant="filled" />,
  pending: <Chip label="Pending" color="warning" variant="filled" />,
  completed: <Chip label="Completed" color="success" />,
};
