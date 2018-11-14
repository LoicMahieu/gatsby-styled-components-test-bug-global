import React from 'react'
import { Link } from 'gatsby'
import { createGlobalStyle } from "styled-components"

import Layout from '../components/layout'
import Image from '../components/image'

const GlobalStyle =  createGlobalStyle`
  body {
    background: red;
  }
`

const IndexPage = () => (
  <Layout>
    <GlobalStyle />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
