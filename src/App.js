import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";
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
    element: <EmpleadoCreate/>,

  },
  {
    path :'/empleado/edit' ,
    element: <EmpleadoEdit/>
  },
  {
    path :'/empleado/delete/:empId' ,
    element: <EmpleadoDelete/>
  },
  {
    path :'/empleado/show/:empId' ,
    element: <EmpleadoShow/>
  },
  {
    path: '/empleado/list',
    element:<EmpleadoList/>
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
