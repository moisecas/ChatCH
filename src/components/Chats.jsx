import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/8717975/pexels-photo-8717975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <div className='userChatInfo'>
          <span>Nombre</span>
          <p>Hola</p>
        </div>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/8717975/pexels-photo-8717975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <div className='userChatInfo'>
          <span>Nombre2</span>
          <p>Hola</p>
        </div>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/8717975/pexels-photo-8717975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <div className='userChatInfo'>
          <span>Nombre3</span>
          <p>Hola</p>
        </div>
      </div>
    </div>
  )
}

export default Chats