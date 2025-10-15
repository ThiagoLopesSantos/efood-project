import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeroImage = styled.header`
  width: 100%;
  position: relative;

  .container {
    margin: 0 auto;
    text-align: center;
  }
`
export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 64px;
`
export const Title = styled.h1`
  padding-top: 138px;
  padding-bottom: 40px;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    padding-top: 50px;
  }
`

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 65px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    gap: 16px;
    padding-bottom: 40px;
  }

  ${Logo} {
    margin-top: 0;
    margin-left: 80px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 auto; /* Centraliza a logo */
      width: 150px;
      height: 48px;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.red};
    font-size: 18px;
    font-weight: bold;
  }
  button {
    background-color: transparent;
    color: ${colors.red};
    font-size: 18px;
    font-weight: bold;
  }
`
export const Banner = styled.div`
  width: 100%;
  background-size: cover;
  background-position: right;
  color: ${colors.white};
  position: relative;
  padding: 32px;

  span {
    font-size: 32px;
    font-weight: lighter;
    z-index: 1;
  }

  .title {
    font-weight: bold;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 156px;
  }

  // Filtro de escurecimento
  &::before {
    content: '';
    position: absolute;
    height: 280px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: left;
  }
`
