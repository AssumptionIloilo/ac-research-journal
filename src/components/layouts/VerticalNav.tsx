import pageRoutes, { navLinks } from '@/lib/pageRoutes'
import { button } from '@/styles/recipes'
import Link from 'next/link'
import React, { FC } from 'react'
import { css } from 'styled-system/css'
import { container, stack, vstack, hstack } from 'styled-system/patterns'

type VerticalNavProps = {}

const VerticalNav: FC<VerticalNavProps> = () => {
  return (
    <nav
      className={container({
        w: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: '0',
      })}
    >
      <Link href={pageRoutes.home}>Transformateur</Link>
      <ul
        className={hstack({
          pos: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        })}
      >
        {navLinks.map((navLink) => (
          <Link href={navLink.url}>{navLink.label}</Link>
        ))}
      </ul>
      <Link href={pageRoutes.archive} className={button({ colors: 'primary' })}>
        Read Journals
      </Link>
    </nav>
  )
}

export default VerticalNav
