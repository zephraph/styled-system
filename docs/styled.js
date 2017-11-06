import createStyled from '../src/component'
import {
  fontSize,
  space,
  width,
  color,
} from '../src'

const theme = {
  space: [
    0, 4, 8, 16, 32, 64, 128
  ],
  colors: {
    blue: '#0af',
    green: '#2fa'
  }
}

const styled = createStyled({
  theme,
  plugins: [
    fontSize,
    space,
    width,
    color
  ]
})

export default styled
