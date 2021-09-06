import styled from 'styled-components';


export const Container = styled.div`
    margin: auto;

    .header{
        margin-left: 1rem;
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

        @media (min-width: 1080px) {
            gap: 1.6rem 1rem;
        }

        @media (max-width: 1080px) {
            gap: 1.4rem 0.6rem;
        }

        @media (max-width: 720px) {
            gap: 1.2rem 0.2rem;
        }

        .note {
            margin: auto;
            width: 11rem;
            height: 13rem;
            padding: 0.5rem;
            background-color: #FAF2EC;
            box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
            border-radius: 4px;
            position: relative;
            z-index: 10;

            .text{
                position: absolute;
                z-index: 11;

                p {
                    word-break: break-all;
                    max-width: 11rem;
                    max-height: 12rem;
                    font-size: 1.325rem;
                    overflow-y: auto;

                    ::-webkit-scrollbar {
                        width: 0.4rem;
                    }

                    /* Track */
                    ::-webkit-scrollbar-track {
                        background: #FAF2EC; 
                    }
                    
                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                        background: var(--brown); 
                    }

                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                        background: var(--brown-dark); 
                    }
                }
            }

            .back-note {
                width: 11rem;
                height: 13rem;
                padding: 0.5rem;
                background-color: #FAF2EC;
                box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
                position: absolute;
                z-index: 1;
                top: -0.2rem;
                left: 0.2rem;
            }
        }

        a,
        a:visited {
            color: var(--brown);
            text-decoration: none;
        }
    }

    .empty-header{
        margin-bottom: 5rem;
        h1{
            font-family: 'Abhaya Libre', serif;
            color: #000;
            text-align: center;
        }
    }

    .empty-wrapper{
        margin-top: 7rem;

        @media (max-width: 1080px) {
            margin-top: 8rem;
        }

        @media (max-width: 720px) {
            margin-top: 9rem;
        }

        .empty {
            margin-left: 1rem;
        }

        .link {
            margin-top: 9rem;
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
    top: 1.4rem;
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