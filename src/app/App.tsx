import "./styles/index.scss";
import {Routing} from "app/routing";
import {Layout} from "widgets/layout";
import {useTheme} from "shared/lib/hooks";

export const App = () => {
    const {theme} = useTheme();

    return (
        <Layout className={`app ${theme}`}>
            <Routing/>
        </Layout>
    );
};
