import {ReactNode, useMemo, useState} from 'react';
import {themeContext} from "shared/lib/contexts";
import {LOCAL_STORAGE_THEME_KEY, enumTheme} from "shared/config";

const initialState = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? enumTheme.light;

type typeProps = {
    children: ReactNode
}
export const ThemeProvider = ({children}: typeProps) => {
    const [theme, setTheme] = useState<enumTheme>(initialState as enumTheme);

    const memoProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <themeContext.Provider value={memoProps}>
            {children}
        </themeContext.Provider>
    );
};