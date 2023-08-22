import "./styles/index.scss";
import {Routing} from "app/routing/ui/Routing.tsx";
import {Layout} from "widgets/layout";
import {useTheme} from "shared/lib/hooks";

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Layout>
                <Routing/>
            </Layout>
        </div>
    );
};
