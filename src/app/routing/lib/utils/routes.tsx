import { type RouteProps } from 'react-router-dom'
import { pathRoute } from 'shared/config/path-routes'
import { AboutPageLazy } from 'pages/about'
import { MainPageLazy } from 'pages/main'
import { NotFoundPage } from 'pages/not-found'

export const routes: RouteProps[] = [
  {
    path: pathRoute.ABOUT,
    element: <AboutPageLazy/>
  },
  {
    path: pathRoute.MAIN,
    element: <MainPageLazy/>
  },
  {
    path: pathRoute.MEDIA,
    element: <div>Media...</div>
  },
  {
    path: pathRoute.DOCUMENTATION,
    element: <div>Documentation</div>
  },
  {
    path: pathRoute.NOTFOUND,
    element: <NotFoundPage/>
  }
]
