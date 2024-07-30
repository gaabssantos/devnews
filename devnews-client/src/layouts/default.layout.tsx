import { Outlet } from 'react-router-dom';

import Header from '../components/Header/header.component';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
