import NavBar from "../reuseables/navBar";
// import FrontPage from "../reuseabcales/frontPage";
import {Outlet} from "react-router-dom";
import Footer from "../reuseables/Footer";

const Layout = ()=>{
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            {/*<FrontPage/>*/}
        </>
        );

}

export default Layout;