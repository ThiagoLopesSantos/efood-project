import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.bege2};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
`
