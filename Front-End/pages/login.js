import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../app/styles/login.css'; // Verifique se o caminho está correto

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

    const response = await fetch('/api/Users/logar', {
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
        <h4 className='sur'>Sign in</h4>
      </header>

      <main id="main-container">
        <form onSubmit={handleSubmit}>
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
          <p></p>
          <Link href="/logout">

          <button id="signup" className="enviar" type="submit">
            Sign In
          </button>
          </Link>
        </form>
      </main>

      <footer id="footer">
        <p className='dnh'>Don't have an account?</p>
        <Link href='/signup' id="link">Create account</Link>
      </footer>
    </div>
  );
};

export default SignupPage;