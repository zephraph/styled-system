import React from 'react'
import { createProvider } from 'funcup'
// import { Box, hoc } from './styled-components'
import Demo from './Demo'

import styled from './styled'

const Box = styled('div')([])

const _App = props => (
  <Demo />
)

const App = props => (
  <Box bg='green' p={4}>
    <Box p={5} mb={3} bg='blue' />
    <h1>Hello</h1>
  </Box>
)

const state = {
  xray: false
}

export default createProvider(state)(App)
