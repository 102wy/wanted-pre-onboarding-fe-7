import styled from 'styled-components';

export const LoginWrap = styled.section`
    width: ${props => props.theme.contentWidth};
    margin: 0 auto;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginCont = styled.div`
    width: 50%;
    height: 50%;
    min-width: 50rem;
    min-height: 50rem;
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h1{
        text-align: center;
        font-size: 3.5rem;
        line-height: 8rem;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 3rem;
        label{
            display: flex;
            flex-direction: column;
            p{
                line-height: 3rem;
                font-size: 2rem;
            }
            input{
            border: none;
            border-bottom: .1rem solid #000;
            line-height: 3rem;
            font-size: 1.8rem;
            cursor: text;
            transition: all 0.3s ease-in-out;
            &:focus {
                border-bottom: .2rem solid ${props => props.theme.yellow};
            }
            }
            span{
                padding: 1rem 0;
                color: ${props => props.theme.orange};
            }
        }
        button {
            cursor: pointer;
            border: none;
            background-color: ${props => props.theme.orange};
            font-size: 2rem;
            line-height: 4rem;
            border-radius: 1rem;
            color: #fff;
            &:disabled {
                background-color: ${props => props.theme.gray};
            }
        }
    }
    .signup {
            text-align: center;
            cursor: pointer;
        }
`