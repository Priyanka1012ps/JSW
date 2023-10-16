// import "../src/Components/SideNavBar/styles/main.scss"
// // import './App.css';
// import Sidebar from "./Components/SideNavBar/Sidebar";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// // import LoginSignup from './Components/LoginSignup/LoginSignup';
// // import Navbar from './Components/Navbar/Navbar';
// import FeedBack from "./Components/SideNavBar/pages/FeedBack";
// import Ppts from "./Components/SideNavBar/pages/Ppts";
// import Videos from "./Components/SideNavBar/pages/Videos";

// import Dashboard from "./Components/SideNavBar/pages/Dashboard";
// import Books from "./Components/SideNavBar/pages/Books";
// import { Switch, Route } from "react-router-dom";
// function App() {
//   return (
    
      
//       <Router>
//             <div className="App">
//                 <Sidebar />
//                 <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/books" element={<Books />} />
//                     <Route path="/feedBack" element={<FeedBack />} />
//                     <Route path="/ppts" element={<Ppts />} />
//                     <Route path="/videos" element={<Videos />} />
                    
//                 </Routes>
//             </div>
//         </Router>
//   );
// }

// export default App;
import "../src/Components/SideNavBar/styles/main.scss"
import Sidebar from "./Components/SideNavBar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/SideNavBar/pages/Dashboard";
import News from "./Components/SideNavBar/pages/News";
import Performance from "./Components/SideNavBar/pages/Performance";
import Transactions from "./Components/SideNavBar/pages/Transactions";
import Settings from "./Components/SideNavBar/pages/Settings";
import Support from "./Components/SideNavBar/pages/Support";


import FeedBack from "./Components/SideNavBar/pages/FeedBack";
 import Ppts from "./Components/SideNavBar/pages/Ppts";
 import Videos from "./Components/SideNavBar/pages/Videos";
import Books from "./Components/SideNavBar/pages/Books";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Books" element={<Books />} />
                    <Route path="/Ppts" element={<Ppts />} />
                    <Route path="/Videos" element={<Videos />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/transactions" element={<Transactions />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;