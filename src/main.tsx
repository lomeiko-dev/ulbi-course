import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {App} from "app/App.tsx";
import {ThemeProvider} from "app/providers/theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>

)
