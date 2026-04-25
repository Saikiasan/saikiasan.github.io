import React from 'react'

const Background3D = () => {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1, 
        pointerEvents: 'none', 
        background: 'var(--bg-primary)',
      }} 
    />
  )
}

export default Background3D
