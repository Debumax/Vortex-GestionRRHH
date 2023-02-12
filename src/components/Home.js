import React, {useEffect} from "react";
import { connect } from "react-redux";
import { addEmpleado } from "../actios";

import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";

const Home = (props) => { 
    return (
        <>
            <Header/>
            <EmpleadoList/>
        </> 
    );
};

const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
  };
//  const mapDispatchToProps=(dispatch)=>{
//      return {
//          setEmpleado : (empleado)=>dispatch(addEmpleado(empleado))
//      };

//  };

//  export default connect( mapStateToProps,mapDispatchToProps)(Home);
export default connect( mapStateToProps)(Home);