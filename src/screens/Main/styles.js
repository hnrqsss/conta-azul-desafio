import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100%;
`

export const CardList = styled.div`
    padding: 53px 80px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 678px){
        padding: 80px 0;
    }
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    @media (max-width: 595px){
        justify-content: center;
        align-items: center;
    }
`
