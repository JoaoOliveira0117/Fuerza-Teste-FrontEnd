import styled from 'styled-components';


export const Container = styled.div`
    margin: auto;

    .header{
        margin-top: 2rem;
        display: inline-flex;
        min-height: 2rem;

        .backArrow{
            margin: auto;
            height: 1.2rem;
            cursor: pointer;
        }

        .title-wrapper{
            margin-left: 1rem;
            font-family: 'Abhaya Libre', serif;
            color: #000;

            h2 {
                vertical-align: middle;
            }

            input {
            width: 90%;
            padding: 0.4rem 0.5rem;
            border: 1px solid rgba(157, 164, 166, 0.07);
            color: var(--brown);
            font-weight: 600;
            background: rgba(255, 255, 255, 0.42);

            &:focus {
                outline: none;
            }

            ::placeholder {
                opacity: 0.42;
            }
        }
        }
    }

    .notes-wrapper{
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 0.6rem;

        .note {
            width: 10rem;
            height: 12rem;
            padding: 0.5rem;
            background-color: #FAF2EC;
            box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
            border-radius: 4px;

            p {
                overflow: hidden;
                text-overflow: ellipsis; 
            }
        }

        a,
        a:visited {
            color: var(--brown);
            text-decoration: none;
        }
    }

    .empty-header{
        margin-bottom: 4rem;
        h1{
            font-family: 'Abhaya Libre', serif;
            color: #000;
            text-align: center;
        }
    }

    .empty-wrapper{
        margin-top: 10rem;

        @media (max-width: 1080px) {
            margin-top: 11rem;
        }

        @media (max-width: 720px) {
            margin-top: 12rem;
        }

        .empty {
            margin-left: 1rem;
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
    }
`

export const Button = styled.button`
    position: absolute;
    top: -0.2rem;
    right: 1.2rem;
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