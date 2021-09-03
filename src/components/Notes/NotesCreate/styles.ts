import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;

    .header{
        margin-top: 2rem;
        margin-bottom: 2rem;
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
        }
    }

    .input-wrapper{
        display: block;
        text-align: center;
    }

    input,
    textarea {
        margin-top: 1.5rem;
        width: 90%;
        padding: 0.8rem 0.8rem;
        border: 1px solid rgba(157, 164, 166, 0.07);
        color: var(--brown);
        font-weight: 600;
        background: rgba(255, 255, 255, 0.42);

        &:focus {
            outline: none;
        }

        ::placeholder {
            color: var(--brown);
        }

    }
    
    .textarea{
        resize: none;
    }

    .error {
        font-size: 0.8rem;
        color: var(--error);
        text-align: center;
        padding-top: 0.4rem;
    }

    .button-wrapper {
        text-align: center;
        margin-top: 2rem;

        button {
            color: #fff;
            background-color: var(--brown);
            padding: 1rem 3rem;
            border: none;
            border-radius: 2rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`