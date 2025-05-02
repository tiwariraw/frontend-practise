import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <Outlet />
    </>
  );
};

export default Dashboard;
