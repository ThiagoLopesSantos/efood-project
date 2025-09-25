import styled from 'styled-components'
import { colors } from '../../styles'

export const PdContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.bege2};
`
export const Title = styled.h4`
  font-size: 16px;
  padding-top: 8px;
`
export const DescriptionCard = styled.p`
  padding: 8px 0;
  font-size: 14px;
`
export const ButtonCard = styled.button`
  border: none;
  background-color: ${colors.bege2};
  color: ${colors.red};
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
`
