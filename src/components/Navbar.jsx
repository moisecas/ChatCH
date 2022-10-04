import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Soporte Ciencias Humanas</span> 
      <div className='users'>
        <img src="https://images.pexels.com/photos/8717975/pexels-photo-8717975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Nombre</span>
        <button>Salir</button>
      </div>
    </div>
  )
}

export default Navbar