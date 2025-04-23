import React, { useContext } from 'react'
import Context from '../context/context'
import { NavLink } from 'react-router';

export default function Home() {
  const { nameLogin, senhaLogin } = useContext(Context);
  return (
    <div>
      <h1>Olá, {nameLogin}</h1>
      <h2>Sua senha é: {senhaLogin}</h2>

      <NavLink to={'/login'}>
        <button>Sair</button>
      </NavLink>
    </div>
  )
}
