import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../shared/api';
import { LoginCont, LoginWrap } from '../Login/styles';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checkEmail, setcheckEmail] = useState(false);
    const [checkPassword, setcheckPassword] = useState(false);
    const navigate = useNavigate();
    const emailCheck = (e) => {
        const email = e.target.value;
        email.includes('@') ? setcheckEmail(true) : setcheckEmail(false);
        setEmail(email);
    }
    const passwordCheck = (e) => {
        const password = e.target.value;
        password.length >= 8 ? setcheckPassword(true) : setcheckPassword(false);
        setPassword(password);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.signUp(email, password)
                .then(res => alert('회원가입 성공!'), navigate('/'))
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <LoginWrap>
            <LoginCont>
                <h1>회원가입</h1>
                <form action="">
                    <label>
                        <p>아이디</p>
                        <input type="text" placeholder='아이디를 입력하세요' onChange={emailCheck} />
                        {!checkEmail && <span>이메일로 가입해주세요</span>}
                    </label>
                    <label>
                        <p>비밀번호</p>
                        <input type="password" placeholder='비밀번호를 입력하세요' onChange={passwordCheck} />
                        {!checkPassword && <span>비밀번호는 8자이상 입력해 주세요.</span>}
                    </label>
                    <button disabled={!(checkEmail && checkPassword)} onClick={onSubmit}>회원가입</button>
                </form>
            </LoginCont>
        </LoginWrap>
    );
};

export default SignUp;