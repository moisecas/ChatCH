import React from 'react'
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className='formContainer' >
        <div className='formWrapper'>
        <span className='logo'>Chat Soporte Ciencias Humanas</span>
        <span className='title'>Registro</span>

            <form>
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input style={{display:"none"}} type='file' placeholder='photo' id='file' /> 
                <label htmlFor='file'> 
                    <img src={Add} alt='' />
                    <span>Subir foto</span>
                </label>
                <button type='submit'>Register</button>
            </form>
            <p>¿Tiene cuenta? Realiza login</p> 
        </div>

    </div>
  )
}

export default Login