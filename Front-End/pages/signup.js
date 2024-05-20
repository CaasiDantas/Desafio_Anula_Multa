import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../app/styles/sign_up.css'; // Verifique se o caminho está correto

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const response = await fetch('/api/Users/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      console.error('Failed to register');
    }
  };

  return (
    <div className={styles.container}>
      <header id="header">
        <h1>
          <Link href='/'>Pomodoro</Link>
        </h1>
        <h4 className='sur'>Sign up</h4>
      </header>

      <main id="main-container">
        <form onSubmit={handleSubmit}>
          <p>NOME</p>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>EMAIL</p>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>PASSWORD</p>
          <input
            id="password"
            type="password"
            placeholder='type your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>CONFIRM YOUR PASSWORD</p>
          <input
            id="confirm-password"
            type="password"
            placeholder='type your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br></br>
          <button id="signup" className="enviar" type="submit">
            Sign Up
          </button>
        </form>
      </main>

      <footer id="footer">
        <p className='dnh'>Have an account?</p>
        <Link href='/login' id="link">Login</Link>
      </footer>
    </div>
  );
};

export default SignupPage;