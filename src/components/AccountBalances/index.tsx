import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../swap/styleds'



const TokenInfo = styled.div`
  align-items: center;
  justify-content: space-between;
  display: inline-flex;
  width: 100%;
`
const TokenName = styled.div`
  align-items: left;
  display: inline-flex;
  width: 30%;
`

const ColoredLine = styled.hr`
  border: none;
  height: 2px;
  color: ${({ theme }) => theme.colors.textSubtle};
  background: ${({ theme }) => theme.colors.borderColor};
`

const Overview = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: .5rem;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
`
const O1TOverview = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: .9rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
`

const O1TOverviewWrapper = styled.div`
  border-radius: 1rem;
  padding: 2px;
  background: red;
  margin-bottom: .5rem;
  background: rgb(46,81,245);
  background: linear-gradient(15deg, rgba(46,81,245,1) 0%, rgba(64,224,255,.5) 23%, rgba(240,20,178,1) 49%, rgba(253,223,6,1) 77%, rgba(245,138,37,1) 100%);
`

export default function AccountBalances() {
  return (
    <Wrapper>
      <ColoredLine />
      <O1TOverviewWrapper>
        <O1TOverview>
          <TokenInfo>
            <TokenName>
             O1T
            </TokenName>
          </TokenInfo>
        </O1TOverview>
      </O1TOverviewWrapper>
      <Overview>
        <TokenInfo>
          <TokenName>
            O1T
          </TokenName>
        </TokenInfo>
      </Overview>
      <Overview>
        O1T
      </Overview>
      <Overview>
        <TokenInfo>
          <TokenName>
            O1T
          </TokenName>
        </TokenInfo>
      </Overview>
    </Wrapper>
  )
}

