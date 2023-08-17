import React, { FC } from 'react'
import { container } from 'styled-system/patterns'

type VerticalFooterProps = {}

const VerticalFooter: FC<VerticalFooterProps> = () => {
  return (
    <footer
      className={container({
        w: 'full',
      })}
    >
      hey hey hey hey
    </footer>
  )
}

export default VerticalFooter
