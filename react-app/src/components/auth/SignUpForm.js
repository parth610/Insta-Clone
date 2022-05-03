import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { login, signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPrivate, setIsPrivate] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password, isPrivate));
      if (data) {
        setErrors(data)
      }
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

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const updateLastName = (e) => {
    setLastName(e.target.value)
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateIsPrivate = () => {
    setIsPrivate(!isPrivate)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='login-form' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
        <input
          className='login-input'
          placeholder='First Name'
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
        <input
          className='login-input'
          placeholder='Last Name'
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={lastName}
        ></input>
        <input
          className='login-input'
          placeholder='Username'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
        <input
          className='login-input'
          placeholder='Email'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
        <input
          className='login-input'
          placeholder='Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
        <input
          className='login-input'
          placeholder='Confirm Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      <div>
        <label for='private-box'>Private
        <input
          className='private-checkbox'
          type="checkbox"
          name="private"
          id='private-box'
          checked={isPrivate}
          onChange={updateIsPrivate}
          ></input>
          </label>
      </div>
      <button className='demo-button' type='submit'>Sign Up</button>
      <button className='demo-button' type='button' onClick={handleDemo}>Demo</button>
    </form>
  );
};

export default SignUpForm;
