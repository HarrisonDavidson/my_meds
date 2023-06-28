import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Authorized } from './components/views/Authorized';
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppViews } from './components/views/AppViews';

function MyMeds() {

return (

<Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={
      <Authorized>
          <>
          <NavBar />
          <AppViews />
          </>
          </Authorized>} />
  </Routes>
</Router>
);
}


export default MyMeds;


//   <Router>
//         <div className="App">
//           <NavBar />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Home />}>
//               </Route>
//               <Route path="/create" element={<Create />}>
//               </Route>
//               <Route path="/meds/:id" element={<MedDetails />}>
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </Router>
//   );
// }
