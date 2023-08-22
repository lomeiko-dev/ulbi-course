import style from "./Header.module.scss";
import {NavBar} from "../../navbar";
import {useTheme} from "shared/lib/hooks/theme/useTheme.ts";

export const Header = () => {
    const {toggleTheme} = useTheme();

    return (
        <div className={style.header}>
            <div>
                <h1>Продвинутый Frontend</h1>
            </div>

            <NavBar/>
            <button onClick={toggleTheme}>change themes</button>
        </div>
    );
};