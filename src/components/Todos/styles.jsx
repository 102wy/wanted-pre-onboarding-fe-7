import styled from 'styled-components';

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