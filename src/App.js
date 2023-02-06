import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Nav";
import EmpleadoList from "./components/Empleados/EmpleadoList";
import EmpleadoShow from "./components/Empleados/EmpleadoShow";
import EmpleadoEdit from "./components/Empleados/EmpleadoEdit";
import EmpleadoCreate from "./components/Empleados/EmpleadoCreate";
import EmpleadoDelete from "./components/Empleados/EmpleadoDelete";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>  
  },
  {
    path :'/empleado/new' ,
    element: <EmpleadoCreate/>
  },
  {
    path :'/empleado/edit' ,
    element: <EmpleadoEdit/>
  },
  {
    path :'/empleado/delete' ,
    element: <EmpleadoDelete/>
  },
  {
    path :'/empleado/show' ,
    element: <EmpleadoShow/>
  }
]);



function App() {
  return (
    <div >
      
      <RouterProvider router={router}>
    
      
      </RouterProvider >


    </div>

  );
}

export default App;

/*

<Route path="/empleado/show" exact element={EmpleadoShow} />*/
