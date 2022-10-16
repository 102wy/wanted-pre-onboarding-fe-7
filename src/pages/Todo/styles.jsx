import styled from 'styled-components';

export const TodoWrap = styled.div`
    width: ${props => props.theme.contentWidth};
    margin: 0 auto;
    font-size: 1.8rem;
`
export const TodoCont = styled.section`
    padding: 5rem 0;
    h1{
        font-size: 2.5rem;
        text-align: center;
    }
`
export const TodoList = styled.ul`
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const TodoForm = styled.form`
    display: flex;
    justify-content: center;
    input{
        width: 90%;
        border: none;
        border-bottom: .1rem solid black;
        line-height: 2.5rem;
        cursor: text;
        transition: all 0.3s ease-in-out;
        &:focus {
            border-bottom: .2rem solid ${props => props.theme.yellow};
        }
    }
    button{
        width: 10%;
        padding: .8rem;
        border: none;
        background-color: ${props => props.theme.yellow};
        color: #fff;
    }
`
export const TodoLi = styled.li`
        display: flex;
        justify-content: space-between;
`
export const ButtonWrap = styled.div`
    display: flex;
    gap: 1rem;
    button{
        border: none;
        background-color: #fff;
        color: black;
        padding: .5rem;
        transition: all 0.2s ease-in;
        &:hover {
            color: ${props => props.theme.yellow};
        }
    }
`
export const Todobox = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 90%;
    img {
        height: 2rem;
        width: auto;
        cursor: pointer;
    }
    p{
        font-size: 2rem;
    }
    .todoList{
        font-size: 2rem;
        border: none;
        cursor: text;
        width: 90%;
    }

`
