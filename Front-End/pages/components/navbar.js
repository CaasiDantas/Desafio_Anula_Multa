import React, { useState } from 'react';
import '../../app/styles/navbar.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário logado
  const router = useRouter();

  // Função para fazer logout
  const handleLogout = () => {

    setUserName(''); 
    router.push('/login'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pomodoro</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/aboutMe">Sobre</a></li>
        <li className="navbar-item"><a target='blank' href="https://github.com/ylano/ylano">Github</a></li>
      </ul>
      <ul className="navbar-menu">
        {userName ? ( // Verifica se o nome do usuário está disponível
          <>
            <li className="navbar-item">{userName}</li>
            <li className="navbar-item"><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li className="navbar-item"><a href="/login">Login</a></li>
            <li className="navbar-item"><a href="/signup">Sign Up</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;