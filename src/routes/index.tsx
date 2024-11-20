import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import RegistrationStep1 from '../pages/Registration.tsx';
import RegistrationStep2 from '../pages/Registration2.tsx';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/registrationStep1' element={<RegistrationStep1 />} />
        <Route path="/registration-step2" element={<RegistrationStep2 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
