import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";


const Home = (props) => { 
    return (
        <>
            <Header/>
            <EmpleadoList/>
            <footer>
            </footer>

            
        </> 
    );
};

const mapStateToProps = state => {
    return { lista : state.listaEmpleados}
  };

export default connect( mapStateToProps)(Home);