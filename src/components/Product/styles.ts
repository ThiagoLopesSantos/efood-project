import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const PdContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.beige2};

  img {
    display: block;
    width: 100%;
    height: 170px;
  }
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
  background-color: ${colors.beige2};
  color: ${colors.red};
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
`

//  MODAL STYLES

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
export const ModalContent = styled.div`
  padding: 32px;
  display: flex;
  column-gap: 24px;
  max-width: 1024px;
  font-size: 14px;
  background-color: ${colors.red};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }
`
export const ModalImage = styled.img`
  max-width: 280px;
  width: 100%;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
  }
`

export const ModalDetails = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 16px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  button {
    border: none;
    font-weight: bold;
    padding: 4px 7px;
    color: ${colors.red};
    background-color: ${colors.beige2};
    cursor: pointer;
    width: fit-content;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }
`
export const ModalDescription = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 32px;
    line-height: 22px;
  }
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
