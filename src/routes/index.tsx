import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import RegistrationStep1 from '../pages/Registration.tsx';
import RegistrationStep2 from '../pages/RegistrationStep2.tsx';
import RegistrationStep3 from '../pages/RegistrationStep3.tsx';
import RegistrationStep4 from '../pages/RegistrationStep4.tsx';
import Meeting from '../pages/Meeting.tsx';


const AppRoutes: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/registration-step1' element={<RegistrationStep1 />} />
          <Route path="/registration-step2" element={<RegistrationStep2 />} />
          <Route path="/registration-step3" element={<RegistrationStep3 />} />
          <Route path="/registration-step4" element={<RegistrationStep4 />} />
          <Route path="/calendar" element={<Meeting />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
