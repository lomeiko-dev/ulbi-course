import {ReactNode} from "react";
import {Header} from "./header";

type typeProps = {
    children: ReactNode;
}
export const Layout = ({children}: typeProps) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}