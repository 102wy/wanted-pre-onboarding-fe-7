import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Todos from '../../components/Todos';
import { TodoContext } from '../../context/TodoContext';
import { api } from '../../shared/api';
import { TodoCont, TodoForm, TodoList, TodoWrap } from './styles';

const Todo = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState();
    const todoRef = useRef();
    const createTodo = async (e) => {
        e.preventDefault();
        if (todoRef.current.value.length <= 0) {
            alert('한글자 이상 적어주세요!')
        } else {
            try {
                await api.createTodo(todoRef.current.value).then(res => {
                    setTodos([...todos, res.data])
                    alert('추가완료!');
                    todoRef.current.value = '';
                })
            }
            catch (error) {
                alert(error);
            }
        }
    }
    const getTodo = async () => {
        try {
            await api.getTodo().then(res => {
                setTodos(res.data)
            });
        }
        catch (error) {
            alert.log(error)
        }
    }

    useEffect(() => {
        if (!window.localStorage.getItem('token') && navigate('/todo'));
        getTodo();
    }, []);


    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            <TodoWrap>
                <TodoCont>
                    <h1>💛Todo List💛</h1>
                    <TodoList>
                        {todos?.map(item => <Todos key={item.id} id={item.id} todo={item.todo} isCompleted={item.isCompleted} />)}
                    </TodoList>
                    <TodoForm>
                        <input type="text" ref={todoRef} />
                        <button onClick={createTodo}>추가</button>
                    </TodoForm>
                </TodoCont>
            </TodoWrap>
        </TodoContext.Provider>
    );
};

export default Todo;