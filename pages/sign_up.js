import React from 'react'
import Link from 'next/link'
import styles from '../app/styles/sign_up.css'


export default function Login() {
    return (
        <div>
            <header id="header">
                <h1>
                    <Link href='/'>Pomodoro</Link>
                </h1>
                <h4 className='sur'>Sign up</h4>
            </header>

            <main id="main-container">
                <p>EMAIL</p>
                <form id="email-form">
                    <input id="email" type="email" placeholder="example@email.com" />
                </form>
                <p>PASSWORD</p>
                <form id="password-form">
                    <input id="password" type="password" placeholder='type your password'/>
                </form>
                <form>
                        <button id="login" className="enviar" type="submit">
                    
                        Login with Email
                    
                    </button>
                </form>
            </main>

            <footer id="footer">
                <p className='dnh'>Have an account?</p>
                <Link href='/login' id="link">Login</Link>
            </footer>
        </div>
    )
}
