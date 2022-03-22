import React from 'react'
import styled from 'styled-components'
import { Card } from '@apeswapfinance/uikit'

export const BodyWrapper = styled(Card)`
  /* position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%); */
  max-width: 436px;
  width: 95%;
  z-index: 5;
  margin-top:2rem;
  position:relative;
  ::before {
    content: '';
    position: absolute;
    z-index:-1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius:32px;
    padding: 2px;
    background: linear-gradient(181.54deg, #FFFFFF -8.68%, #3C3E42 118.04%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, idName }: { children: React.ReactNode, idName?: string }) {
  return <BodyWrapper id={idName}>{children}</BodyWrapper>
}
