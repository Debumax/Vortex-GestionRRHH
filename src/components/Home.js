import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";

const Home = (props) => { 
    return (
        <>
            <Header/>
            <EmpleadoList/>
            <footer style={{backgroundColor: 'rgba(44, 12, 91, 0.955)', height:'3em',position:'bottom', marginTop:'5.6em'}}/>
        </> 
    );
};
const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
  };
export default connect( mapStateToProps)(Home);