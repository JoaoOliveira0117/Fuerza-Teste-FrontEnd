import styled from 'styled-components';

export const Background = styled.div`
    z-index: 1;
    position: absolute;
    left: -60%;

    @media (min-width: 720px) {
        top: -42%;
    }

    @media (max-width: 720px) {
        top: -50%;
    }
`

export const Container = styled.div`
    max-width: 375px;
    margin: 11rem auto 0;
    color: var(--brown);
    padding: 2rem 1rem 12rem;

    @media (max-width: 1080px) {
        margin: 11rem auto 0;
    }

    @media (max-width: 720px) {
        margin: 16rem auto 0;
    }

    .content-wrapper{
        z-index: 10;
        position: relative;
    }

    .loginForm {
        z-index: 100;
        position: relative;
    }

    .logo-wrapper {
        margin-bottom: 5.5rem;
    }

    .header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        h1 {
            font-weight: 400;
        }

        a {
            font-size: 0.8rem;
            font-weight: 600;
        }
    }

    .link,
    .link:visited {
        color: var(--brown);
    }

    .forgot-password {
        font-size: 0.8rem;
    }

    .link-container{
        margin-top: 0.4rem;
        text-align:end;
    }

    .button-wrapper {
        margin-top: 2.5rem;
        text-align: center;
    }

    .error {
        font-size: 0.8rem;
        color: var(--error);
        text-align: center;
        padding-top: 0.4rem;
    }

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
`

export const LoginInput = styled.div`
    margin-top: 2rem;
    position: relative;

    input {
        width: 100%;
        color: var(--brown);
        padding: 0.8rem 1rem 0.4rem;
        height: 3rem;
        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;

        transition: box-shadow 0.2s;

        &:focus {
            outline: none;
            box-shadow: 0 0 3px 1px #87CEFA;
        }

        &:focus ~ span,
        &:not(:placeholder-shown) ~ span{
            font-size: .6rem;
            top: 0.3rem;
            opacity: 0.5;
        }
    }

    span {
        font-size: .8rem;
        font-weight: 600;
        color: var(--text);
        position: absolute;
        pointer-events: none;
        left: 1rem;
        top: 0.8rem;
        transition: 0.2s ease all;
    }
`