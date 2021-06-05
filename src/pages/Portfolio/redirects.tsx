import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

// Redirects to portfolio but only replace the pathname
export function RedirectPathToPortfolioOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/portfolio' }} />
}

export default RedirectPathToPortfolioOnly
