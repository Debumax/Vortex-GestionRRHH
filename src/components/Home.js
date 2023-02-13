import React from "react";
//import { connect } from "react-redux";
import Header from "./Header";
import EmpleadoList from "./Empleados/EmpleadoList";
import Footer from "./Footer";


const Home = (props) => {
     
    return (
        <>
            <Header/>
            <EmpleadoList/>
            <Footer/>

        </> 
    );
};
// const mapStateToProps = state => {
//     return { lista : state.listaEmpleados}
//   };
// export default connect( mapStateToProps)(Home);
export default Home;
