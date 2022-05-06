import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { login } from '../../store/session';

const LoginForm = () => {
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    const errs = []
    if (email.length === 0) errs.push("Please provide an email address.")
    if (!email.includes('@')) errs.push("Please provide a valid email.")
    if (password.length === 0) errs.push("Please provide a password.")
    setValidationErrors(errs)
  }, [email, password])

  const onLogin = async (e) => {
    e.preventDefault();
    if (validationErrors.length === 0) {
      const data = await dispatch(login(email, password));
      if (data) {
        console.log(data)
        setValidationErrors(data)
        return
      } else {
        setShowErrors(false)
        history.push('/home')
      }
    } else {
      setShowErrors(true)
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault()

    const demo = {
      email: 'demo@aa.io',
      password: 'password'
    }
    await dispatch(login(demo.email, demo.password))
    history.push('/home')
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className='login-form' onSubmit={onLogin}>
      {showErrors && <div>
        {validationErrors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>}
        <input
          className='login-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <input
          className='login-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      <button className='login-button' type='submit'>Log In</button>
      <button className='demo-button' type='button' onClick={handleDemo}>Demo</button>
    </form>
  );
};

export default LoginForm;
