import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../shared/api';
import { LoginCont, LoginWrap } from './styles';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checkEmail, setcheckEmail] = useState(false);
    const [checkPassword, setcheckPassword] = useState(false);
    // 유효성 검사
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
            await api.signIn(email, password)
                .then(res => {
                    window.localStorage.setItem('token', res.data.access_token);
                    navigate('/todo');
                })
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (window.localStorage.getItem('token') && navigate('/todo'));
    }, []);
    return (
        <LoginWrap>
            <LoginCont>
                <h1>로그인</h1>
                <form action="">
                    <label>
                        <p>아이디</p>
                        <input type="text" placeholder='아이디를 입력하세요' onChange={emailCheck} />
                        {!checkEmail && <span>이메일로 로그인 해주세요</span>}
                    </label>
                    <label>
                        <p>비밀번호</p>
                        <input type="password" placeholder='비밀번호를 입력하세요' onChange={passwordCheck} />
                        {!checkPassword && <span>비밀번호는 8자이상 입력해 주세요.</span>}
                    </label>
                    <button disabled={!(checkEmail && checkPassword)} onClick={onSubmit}>로그인</button>
                </form>
                <p className='signup' onClick={() => navigate('/signup')}>회원가입</p>
            </LoginCont>
        </LoginWrap>
    );
};

export default Login;