import style from "./NavBar.module.scss";
import {Link} from "react-router-dom";
import {pathRoute} from "shared/config/path-routes";

export const NavBar = () => {
    return (
        <div className={style.navbar}>
            <Link to={pathRoute.MAIN}>Main</Link>
            <Link to={pathRoute.ABOUT}>About</Link>
        </div>
    );
};