
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const IconButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  cursor: pointer;
  box-shadow: 0px 6px 30px rgba(0, 117, 255, 0.35);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    font-size: 24px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.white};
  }

  &:active {
    background-color:  ${({ theme }) => darken(0.04, theme.colors.white)};
    border: 1px solid ${({ theme }) => darken(0.04, theme.colors.white)};
  }

  ${({ naked }) => naked && css`
    background-color: transparent;
    border-color: transparent;
    padding: 2px;
  `}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: ${({ borderRadius }) => !borderRadius ? '0px' : borderRadius};
  line-height: 17px;
  padding: 10px 17px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ bgtransparent }) => bgtransparent && css`
    background: transparent !important;
    border: 1px solid ${props => props.theme.colors.buttonBorder};
  `}
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}

  ${({ color }) => color === 'primary' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};;
    border-color: ${props => props.theme.colors.primary};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
      box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    }
    ${({ naked }) => naked && css`
      background: transparent;
      border-color: ${props => props.theme.colors.white};
    `}
  `}

  ${({ color }) => color === 'black' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.black};
    &:hover {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black};
      border-color: ${props => props.theme.colors.white};
    }
    &:active {
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black};
      border-color: ${props => props.theme.colors.white};
      box-shadow: 0px 4px 20px rgba(0, 117, 255, 0.35);
    }
  `}
`