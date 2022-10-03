import React from 'react'


const Login = () => {
  return (
    <div className='formContainer' >
        <div className='formWrapper'>
        <span className='logo'>Chat Soporte Ciencias Humanas</span>
        <span className='title'>Login</span>

            <form>
               
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                
                <button type='submit'>Iniciar sesión</button>
            </form>
            <p>¿No tiene cuenta? Registrese</p> 
        </div>

    </div>
  )
}

export default Login