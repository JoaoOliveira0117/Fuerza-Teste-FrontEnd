import styled from 'styled-components';

export const Container = styled.div`
    .journal-wrapper{
        margin-top: 8rem;
    }
    .journal {
        position: relative;
        margin: auto;
        width: 16rem;

        h2 {
            position: absolute;
            top: 50%;
            left: 15%;
            transform: translateY(-50%); 
            width: 12rem;
            max-height: 14rem;
            font-family: 'Abhaya Libre', serif;
            color: #000;
            overflow-wrap: break-word;

            :after {
                content: '_';
                font-size: 1.4rem;
                animation: blink 1s step-end infinite;
            }
        }
    }

    .input-wrapper {
        text-align: center;
        margin-top: 1rem;
        
        input {
            width: 90%;
            padding: 0.5rem 0.5rem;
            border: 1px solid rgba(157, 164, 166, 0.07);
            color: var(--brown);
            font-weight: 600;
            background: rgba(255, 255, 255, 0.42);

            &:focus {
                outline: none;
            }

            :placeholder {
                opacity: 0.42;
            }
        }
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

    @keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #000;
        }
    }
`