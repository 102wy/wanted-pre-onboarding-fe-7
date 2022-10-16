import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { api } from '../../shared/api';
import { ButtonWrap, Todobox, TodoLi } from './styles';

const Todos = ({ id, todo, isCompleted }) => {
    const [isEdit, setEdit] = useState(false);
    const [isChecked, setChecked] = useState(isCompleted);
    const updateRef = useRef();

    const { todos, setTodos } = useContext(TodoContext);

    const updateTodo = async (id) => {
        try {
            const updateData = updateRef.current.value;
            if (updateData.length <= 0) {
                alert('한글자 이상 적어주세요!')
            } else {
                await api.updateTodo(id, updateData, isChecked).then(res => {
                    const t = todos.filter(value => value.id !== id);
                    setTodos([...t, res.data]);
                    alert('수정이 완료 되었습니다!')
                    setEdit(false)
                })
            }
        }
        catch (error) {
            alert(error)
        }
    }
    const deleteTodo = async (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            try {
                await api.deleteTodo(id).then(res => {
                    setTodos(todos.filter(value => value.id !== id));
                    alert('삭제가 완료되었습니다.');
                });
            }
            catch (error) {
                alert(error)
            }
        }
    }
    return (
        <TodoLi>
            {isEdit === false ? (
                <>
                    <Todobox>
                        {!isChecked ? (
                            <img src="/images/icon_not_checked.png" alt="아이콘" />
                        ) : (
                            <img src="/images/icon_checked.png" alt="아이콘" />
                        )}
                        <p>{todo}</p>
                    </Todobox>
                    <ButtonWrap>
                        <button onClick={() => setEdit(true)}>수정하기</button>
                        <button onClick={() => deleteTodo(id)}>삭제하기</button>
                    </ButtonWrap>
                </>
            ) : (
                <>
                    <Todobox>
                        {!isChecked ? (
                            <img src="/images/icon_not_checked.png" alt="아이콘" onClick={() => setChecked(!isChecked)} />
                        ) : (
                            <img src="/images/icon_checked.png" alt="아이콘" onClick={() => setChecked(!isChecked)} />
                        )}
                        <input type="text" defaultValue={todo} ref={updateRef} className='todoList' />
                    </Todobox>
                    <ButtonWrap>
                        <button onClick={() => updateTodo(id)}>수정완료</button>
                    </ButtonWrap>
                </>
            )}
        </TodoLi>
    );
};

export default Todos;