import {JobsTable} from '../components/JobsTable';
import DashboardAppBar from '../components/AppBar';

export const DashBoard = () => {
  return (
    <div>
      <DashboardAppBar />
      <JobsTable />
    </div>
  );
};
