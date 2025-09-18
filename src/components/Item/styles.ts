import styled from 'styled-components'
import { colors } from '../../styles'

export const Itemcontainer = styled.li`
  img {
    display: block;
  }
`
export const ItemImg = styled.div`
  width: 100%;
  height: 217px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding: 16px;
  gap: 8px;
`

export const DescriptionArea = styled.div`
  border: 1px solid;
  border-top: none;
  width: 100%;
  background-color: ${colors.branco};

  p {
    font-size: 14px;
    padding: 16px 8px;
    line-height: 22px;
  }
`
export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 7px;
`
export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
`
