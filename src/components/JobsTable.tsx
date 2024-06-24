import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {JobCreationForm} from './JobCreationForm';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {clientWebSocket} from '../service/clientWebSocket';
import {getJobsList, postNewJob} from '../service/jobApi';
import {JobItem} from '../service/jobApi';
import {JobCreationFormData} from '../interface/form';
import {StatusChips} from './StatusChips';
import {JobsTableContainer} from '../styled/JobsTableContainer';

export const JobsTable = () => {
  const [open, setOpen] = useState(false);
  const [shouldUpdateList, setShouldUpdateList] = useState(false);
  const [jobsList, setJobsList] = useState<JobItem[]>([]);

  // Effects
  useEffect(() => {
    updateJobsList();
    clientWebSocket.addEventHandler('update_jobs_list', () =>
      setShouldUpdateList(true)
    );
  }, []);

  useEffect(() => {
    if (shouldUpdateList) {
      updateJobsList();
      setShouldUpdateList(false);
    }
  }, [shouldUpdateList]);

  const updateJobsList = () => {
    getJobsList().then(({data}) => setJobsList(data));
  };

  // UI CTA handlers
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const createNewTask = (newJobData: JobCreationFormData) => {
    postNewJob({
      name: newJobData.jobName.value,
      requiredTime: parseInt(newJobData.requiredTime.value),
    }).then((resStatus: any) => {
      if (resStatus.success) {
        clientWebSocket.publishEvent('trigger_update');
      }
    });
    setOpen(false);
  };

  return (
    <JobsTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Time Remaining</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>
              <IconButton size="small" onClick={handleOpen}>
                <AddCircleOutlineIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {jobsList.map((job) => (
            <TableRow>
              <TableCell>{job.Name}</TableCell>
              <TableCell>{job.RemainingTime}</TableCell>
              <TableCell colSpan={2}>{StatusChips[job.Status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <JobCreationForm
            handleTaskCreation={createNewTask}
            onClickSecondaryAction={handleClose}
          />
        </Box>
      </Modal>
    </JobsTableContainer>
  );
};
