import React from 'react'

const Message = () => {
  return (
    <div className='message owner' >
      <div className='messageInfo'>
        <img src='https://images.pexels.com/photos/13682725/pexels-photo-13682725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <span className=''>Ahora</span>
      </div>
      <div className='messageContent'>
        <p>Este es un mensaje</p> 
        <img src='https://images.pexels.com/photos/13682725/pexels-photo-13682725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />

      </div>
    </div>
  )
}

export default Message