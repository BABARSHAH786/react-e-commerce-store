import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Link,Navigate } from "react-router-dom"; // Import Link from react-router-dom
// import SecTop from './components/SectionTop';
import SecMid from './components/SsctionMid';
import About from './components/About';
import Home from './pages/home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
// import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";
// import RequireAuth from "./components/RequireAuth";
import { selectIsAuthenticated } from "./redux/authSlice";

const Dashboard = () => (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard - Protected Page</h2>
      <p>Welcome! You are logged in.</p>
      <LogoutButton />
    </div>
  );

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <><BrowserRouter>
      <Nav />
      {/* <div className="p-4 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Dashboard - Protected Page</h2>
    <p>Welcome! You are logged in.</p>
    <LogoutButton />
  </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/Details/:id" element={<ProductDetails />} /> */}
        <Route path="/SecMid" element={<SecMid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <div className="p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div> */}
      <Footer />
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={2000} />
    
       </>
  );
}
export default App;





// //logout
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Login from "./components/Login";
// import LogoutButton from "./components/LogoutButton";
// import RequireAuth from "./components/RequireAuth";
// import { selectIsAuthenticated } from "./redux/authSlice";

// // Updated Dashboard component: includes content and a Logout button
// const Dashboard = () => (
//   <div className="p-4 max-w-md mx-auto">
//     <h2 className="text-2xl font-bold mb-4">Dashboard - Protected Page</h2>
//     <p>Welcome! You are logged in.</p>
//     <LogoutButton />
//   </div>
// );

// function App() {
//   // Optionally, get the authentication state if needed elsewhere.
//   const isAuthenticated = useSelector(selectIsAuthenticated);

//   return (
//     <Router>
//       <div className="p-4">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <RequireAuth>
//                 <Dashboard />
//               </RequireAuth>
//             }
//           />
//           {/* Redirect any unknown routes to /login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;











// auth
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import LogoutButton from "./components/LogoutButton";
// import RequireAuth from "./components/RequireAuth";

// const Dashboard = () => <h2>Dashboard - Protected Page</h2>;

// function App() {
//   return (
//     <Router>
//       <div className="p-4">
//         <LogoutButton />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <RequireAuth>
//                 <Dashboard />
//               </RequireAuth>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;