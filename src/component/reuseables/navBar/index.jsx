import style from "./index.module.css";
import icon from "../../../assets/icons8-blocker-64.png";
import {Link} from "react-router-dom";

const NavBar = ()=>{
    return (
        <div className={style.mainCont}>
            <div className={style.appBlocker}>
                <img src={icon} alt={"Page Icon"}/>
                <h2 className={style.appBlockerText}>AppBlocker</h2>
            </div>
            <div className={style.linkCont}>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <p className={style.links}>Home</p>
                </Link>
                <Link to={"/feature"} style={{textDecoration: "none"}}>
                    <p className={style.links}>Feature</p>
                </Link>
                <Link to={"/about-us"} style={{textDecoration: "none"}}>
                    <p className={style.links}>About Us</p>
                </Link>
            </div>
        </div>
    )
}

export default NavBar