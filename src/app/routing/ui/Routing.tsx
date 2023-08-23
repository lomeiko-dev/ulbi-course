import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'app/routing/lib/utils/routes.tsx'
import { PageLoader } from 'widgets/page-loader'

export const Routing: React.FC = () => {
  return (
      <Suspense fallback={<PageLoader/>}>
          <Routes>
              {routes.map(route =>
                  <Route key={route.path} {...route}/>)}
          </Routes>
      </Suspense>
  )
}
