import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;

    .empty-image{
        margin-top: 16rem;
        margin-left: 1rem;

        @media (max-width: 1080px) {
            margin-top: 17rem;
        }

        @media (max-width: 720px) {
            margin-top: 18rem;
        }
    }

    .link {
        margin-top: 4rem;
        text-align: center;

        a,
        a:visited {
            font-weight: 600;
            color: var(--brown)
        }
    }

    .journals-wrapper {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 1.8rem 0.6rem;
    }

    .journal-box {
        margin: auto; 

        .journal {
            margin: auto;
            position: relative;
            width: 10rem;
            height: 12.5rem;

            @media (max-width: 1080px) {
                height: 13.5rem;
            }

            @media (max-width: 720px) {
                height: 14.5rem;
            }

            .journal-title{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                overflow: hidden;
                text-overflow: ellipsis; 
                text-align: center;
                font-family: 'Abhaya Libre', serif;
                font-size: 1.4rem;
            }

            .light{
                color: #000
            }

            .dark{  
                color: #fff
            }

        }
    }
`

export const Button = styled.button`
    position: absolute;
    top: -0.2rem;
    right: 0.8rem;
    background-color: var(--background);
    border: 1px solid var(--brown);
    border-radius: 3rem;
    padding: 0.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    a {
        text-decoration: none;
        color: var(--brown);
    }
`;