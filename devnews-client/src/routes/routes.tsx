import { Navigate, Route, Routes } from 'react-router-dom';

import DefaultLayout from '../layouts/default.layout';
import Home from '../screens/Home/home.screen';

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
