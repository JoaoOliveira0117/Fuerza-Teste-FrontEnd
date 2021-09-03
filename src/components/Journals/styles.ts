import styled from 'styled-components';

export const Background = styled.div`
    z-index: 1;
    position: absolute;
    left: -60%;

    @media (min-width: 1080px) {
        top: 0;
    }

    @media (max-width: 1080px) {
        top: 0;
    }

    @media (max-width: 720px) {
        top: 0
    }
`

export const Container = styled.div`
    max-width: 375px;
    margin: auto;
    color: var(--brown);
    padding: 2rem 1rem;

    .content-wrapper{
        z-index: 10;
        position: relative;
    }

    .app-wrapper {
        z-index: 100;
        position: relative;
        min-height: 700px;
    }

    .logo { 
        img {
            width: 40%;
        }
    }
`