import styled, { css } from 'styled-components'

export const Input = styled.input`
  background: #FFF;
  border: 1px solid #E9EFFC;
  font-size: 16px;
  line-height: 26px;
  padding: 14px 17px;
  outline: none;
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #DBDCDB;
  }
  &:-ms-input-placeholder {
    color: #DBDCDB;
  }
  &::-ms-reveal{
    display: none;
  }
  &:read-only {
    background: #E9EFFC;
    cursor: not-allowed;
  }
`

export const TextArea = styled.textarea`
  background: #FFF;
  border: 1px solid #E9EFFC;
  border-radius: 8px;
  font-size: 16px;
  padding: 7px 15px;
  outline: none;
  resize: none;
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #DBDCDB;
  }
  &:-ms-input-placeholder {
    color: #DBDCDB;
  }
`
