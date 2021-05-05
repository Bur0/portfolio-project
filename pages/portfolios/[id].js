import React from 'react'
import { useRouter } from 'next/router'

const PortfolioDetail = ({ query }) => {
  const { id } = query

  return <h1>Detail Page Id: {id}</h1>
}

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query }
}
export default PortfolioDetail
