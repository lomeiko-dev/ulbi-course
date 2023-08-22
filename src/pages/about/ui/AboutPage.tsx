import {useContext} from "react";
import {themeContext} from "shared/lib/contexts";

const AboutPage = () => {
    const {theme} = useContext(themeContext);
    console.log(theme);
    return (
        <div>
            ABOUT...
        </div>
    );
}

export default AboutPage;