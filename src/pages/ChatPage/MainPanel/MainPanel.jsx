import React from 'react'
import MessageHeader from './MessageHeader'
import MessageForm from './MessageForm'

const MainPanel = () => {
  return (
    <div>
      <MessageHeader />

      <div style={{
        width: '100%',
        height: 450,
        border: '0.2rem solid #ececec',
        borderRadius: '4px',
        padding: '1rem',
        marginBottom: '1rem',
        overflowY: 'auto' 
      }}>

      </div>

      <MessageForm />
    </div>
  )
}

export default MainPanel