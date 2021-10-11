import "./App.css";
import Login from "./components/Login/Login";
// import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Admin from "./components/Admin/Admin"
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (

    <>

      {/* <Header /> */}
      <Login />
      <Admin />
      <Footer/>
    </>


  );
}

export default App;
