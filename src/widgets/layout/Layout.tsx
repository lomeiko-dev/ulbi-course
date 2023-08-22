import style from "./Layout.module.scss";
import {ReactNode} from "react";
import {Header} from "./header";

type typeProps = {
    children: ReactNode;
    className: string,
}
export const Layout = ({children, className}: typeProps) => {
    return (
        <div className={className}>
            <Header/>
            <div className={style.container}>
                {children}
            </div>

        </div>
    );
}