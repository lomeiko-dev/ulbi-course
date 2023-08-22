import {RouteProps} from "react-router-dom";
import {pathRoute} from "shared/config";
import {AboutPageLazy} from "pages/about";
import {MainPageLazy} from "pages/main";

export const routes: RouteProps[] = [
    {
        path: pathRoute.ABOUT,
        element: (<AboutPageLazy/>),
    },
    {
        path: pathRoute.MAIN,
        element: (<MainPageLazy/>),
    }
]