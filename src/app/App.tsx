import "./styles/index.scss";
import {Routing} from "app/routing/ui/Routing.tsx";
import {Layout} from "widgets/layout";
import {useContext} from "react";
import {themeContext} from "shared/lib/contexts";

export const App = () => {
    const {theme} = useContext(themeContext);
    return (
        <div className={`app ${theme}`}>
            <Layout>
                <Routing/>
            </Layout>
        </div>
    );
};
