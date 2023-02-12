import React from "react";
import { Link } from "react-router-dom";


const Header = ()=>{
    const typeForm=0;
    return (
        <>
            <header className=" container">
                <h1 className="display-1">Gestion De Personal</h1>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="containere-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <Link to={`/empleado/new`} className="btn btn-outline-primary" >creando</Link>
                            
                            <form className="d-flex" >
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                                
                            </form>
                        </div>
                    </div>
            
                </nav>       
            </header>
        </>

    );
};
export default Header;