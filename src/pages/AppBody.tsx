import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapperOutline = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  background: rgb(46,81,245);
  background: linear-gradient(15deg, rgba(46,81,245,.5) 0%, rgba(64,224,255,.5) 23%, rgba(240,20,178,.5) 49%, rgba(253,223,6,.5) 77%, rgba(245,138,37,.5) 100%);
  border-radius: 35px;
  padding: 2px;
  overflow: visible;
  border: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 30px 30px -20px black;
`

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
  padding: 1rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapperOutline><BodyWrapper>{children}</BodyWrapper>
  <div style={{position: 'absolute',
    content: '""',
    top: '0',
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    filter: 'blur(80px)',
		transform: 'scale(.82)',
    background: 'linear-gradient(15deg, rgba(46,81,245,.5) 0%, rgba(64,224,255,.5) 23%, rgba(240,20,178,.5) 49%, rgba(253,223,6,.5) 77%, rgba(245,138,37,.5) 100%)'}} /></BodyWrapperOutline>
}
