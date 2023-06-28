import { Outlet, Route, Routes } from 'react-router-dom';
import MedDetails from '../MedDetails';
import Create from '../editform/MedEdit';
import Home from '../Homepage/Home';
import NavBar from '../nav/NavBar';


export const AppViews = () => {
    return (
      <Routes>
        <Route path="*" element={
            <>
            <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/meds/:id" element={<MedDetails />} />
            <Route path="/NavBar" element={<NavBar />} />
            </Routes>

              <Outlet />
            </>
            }>
         </Route>
         </Routes>
      );
      };