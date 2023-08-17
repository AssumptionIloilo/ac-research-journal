import { FC } from 'react'
import { vstack } from 'styled-system/patterns'
import VerticalNav from './VerticalNav'
import VerticalFooter from './VerticalFooter'

type LayoutProps = {
  children: React.ReactNode
}

const VerticalLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={vstack({
        gap: 0,
        minH: 'screen',
      })}
    >
      <VerticalNav />
      <main
        className={vstack({
          gap: 0,
          flexGrow: 1,
        })}
      >
        {children}
      </main>
      <VerticalFooter />
    </div>
  )
}

export default VerticalLayout
