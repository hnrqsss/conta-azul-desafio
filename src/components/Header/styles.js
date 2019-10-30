import styled from 'styled-components';
import logo from '../../assets/logo.svg'

export const Container = styled.div`
  background: #FFFFFF;
  height: 53px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logo Image'
})`
    height: 28px;
    width: auto;

`
