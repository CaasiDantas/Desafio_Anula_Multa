import React from 'react';
import styles from '../app/styles/login.css';
import Link from 'next/link'

export default function Login() {
    return (
        <div className={styles.container}>
            <header id="header">
                <h1>
                    <Link href='/'>Pomodoro</Link>
                </h1>
                <h4 className='sur'>Sign in</h4>
            </header>
            <main id="main-container">
                <p>EMAIL</p>
                <form id="email-form">
                    <input id="email" type="email" placeholder="example@email.com" />
                </form>
                <p>PASSWORD</p>
                <form id="password-form">
                    <input id="password" type="password" placeholder='type your password' />
                </form>
                <form>
                    <button id="login" className="enviar" type="submit">
                        Login with Email
                    </button>
                </form>
            </main>
            <footer id="footer">
                <p className='dnh'>Do not have an account?</p>
                <Link href='/sign_up' id="link">Create account</Link>
            </footer>
        </div>
    )
}
