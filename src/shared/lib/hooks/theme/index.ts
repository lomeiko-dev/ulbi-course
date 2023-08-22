import {useContext} from "react";
import {themeContext} from "shared/lib/contexts";
import {enumTheme} from "shared/config/themes";
import {LOCAL_STORAGE_THEME_KEY} from "shared/config/local-storage-keys";

export const useTheme = () => {
    const {theme, setTheme} = useContext(themeContext);

    const toggleTheme = () => {
        const newTheme = theme === enumTheme.light ? enumTheme.dark : enumTheme.light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}