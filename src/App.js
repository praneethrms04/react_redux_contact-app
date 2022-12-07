import { Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Home from "./pages/Home";


import "./App.css";
function App() {
  return (
   
      <div className="App">
       <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
  
  );
}

export default App;
