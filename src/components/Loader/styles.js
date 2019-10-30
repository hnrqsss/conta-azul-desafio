import styled from 'styled-components'

import loader from '../../assets/loader.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderImage = styled.img.attrs({
  src:   loader,
  alt: 'Loader image'
})`
    width: 30px;
    height: auto;
`
