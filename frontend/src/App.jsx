import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateOrder from "./pages/createOrder";
import ShowOrder from "./pages/ShowOrder";
import EditOrder from "./pages/EditOrder";
import DeleteOrder from "./pages/DeleteOrder";

const App=()=>{
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/orders/create" element={<CreateOrder/>}/>
      <Route path="/orders/edit/:id" element={<EditOrder/>}/>
      <Route path="/orders/delete/:id" element={<DeleteOrder/>}/>
      <Route path="/orders/details/:id" element={<ShowOrder/>}/>
    </Routes>
  )
}

export default App