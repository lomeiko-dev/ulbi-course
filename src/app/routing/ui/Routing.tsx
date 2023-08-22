import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "app/routing/lib/utils/routes.tsx";

export const Routing = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                {routes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)}
            </Routes>
        </Suspense>
    );
};