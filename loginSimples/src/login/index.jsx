import { useContext , useState } from "react"
import Context from "../context/context"
import { useNavigate } from 'react-router';

export default function Login() {
  const [nameInput, setNameInput] = useState('')
  const [senhaInput, setSenhaInput] = useState('')
  
  const navigate = useNavigate()
  const { setNameLogin, setSenhaLogin } = useContext(Context);

  function handleSubmit(){
    setNameLogin(nameInput)
    setSenhaLogin(senhaInput)
    
    navigate('/')
  }

  return (

    <div>
      <span>Login </span>
      <input type="text" value={nameInput} onChange={(event)=>setNameInput(event.target.value)}/>
      <br />
      <span>Senha </span>
      <input type="text" value={senhaInput} onChange={(event)=>setSenhaInput(event.target.value)}/>
      <br />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  )
}
