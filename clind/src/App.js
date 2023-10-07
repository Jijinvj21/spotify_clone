import './App.scss'; // Import your SCSS file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the addition of Routes
import SideNavbar from "./components/Layout/SideNavbar/SideNavbar";

function App() {
  return (
    <>
      <Router>
        {/* Define your routes using the Routes component */}
        <Routes>
          {/* Unprotected Routes */}
          <Route path="/" element={<SideNavbar />}>
            {/* Specify a valid path */}
            <Route path="vbh" element={"kh"} /> 
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
