import {useContext} from "react";
import {themeContext} from "shared/lib/contexts";
import {enumTheme, LOCAL_STORAGE_THEME_KEY} from "shared/config";

export const useTheme = () => {
    const {theme, setTheme} = useContext(themeContext);

    const toggleTheme = () => {
        const newTheme = theme === enumTheme.light ? enumTheme.dark : enumTheme.light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}