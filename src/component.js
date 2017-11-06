import styled from 'styled-components'

/*
 * import createStyled from 'styled-system/component'
 * import { width, fontSize, space, color } from 'styled-system'
 *
 * const styled = createStyled({
 *   theme,
 *   plugins: [
 *     width,
 *     fontSize,
 *     space,
 *     color
 *   ]
 * })
 */

const createStyled = ({
  theme,
  plugins = []
} = {}) => type => (strings, ...tokens) => {
  const SystemComponent = styled(type)(strings,
    ...tokens,
    ...plugins
  )

  SystemComponent.defaultProps = {
    theme
  }

  return SystemComponent
}

export default createStyled
