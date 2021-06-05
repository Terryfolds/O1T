import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../swap/styleds'
import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../state/wallet/hooks'

const AboveLine = styled.div`
  align-items: center;
  justify-content: space-between;
  display: inline-flex;
  width: 100%;
`
const ColoredLine = styled.hr`
  border: none;
  height: 2px;
  color: ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.borderColor};
`
const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 100;
  padding: 0;
  margin: 0;
  display: inline-flex;
  text-lign: center;
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  padding: 0;
  margin: 0;
  font-size: 24px;
  display: inline-flex;
`

const Overview = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: 1.3rem;
  background: rgba(85,109,244,.07);
  padding: 1rem;
  margin-bottom: 1rem;
`

export default function AccountOverview() {
  const { account } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  return (
    <Wrapper>
      <Overview>
        <AboveLine>
          <H4>YOUR PORTFOLIO</H4>
          <H4>BNB BALANCE</H4>
        </AboveLine>
        <ColoredLine />
        <AboveLine>
          <H2>$10,9833.22</H2>
          <H2>{userEthBalance?.toSignificant(4)}</H2>
        </AboveLine>
      </Overview>
    </Wrapper>
  )
}

