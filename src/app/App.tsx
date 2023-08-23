import React from 'react'
import './styles/index.scss'
import { Routing } from 'app/routing'
import { Layout } from 'widgets/layout'
import { useTheme } from 'shared/lib/hooks'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
      <Layout className={`app ${theme}`}>
          <div className="container">
              <Routing/>
          </div>
      </Layout>
  )
}
