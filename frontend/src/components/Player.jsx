import React from 'react'

const Player = () => {
  return (
    <Chip
      avatar={<Avatar />}
      label="dealer"
      color="secondary"
      variant="outlined"
      size="large"
      className={{
        position: 'absolute',
        right: '50%',
        top: 200,
        transform: 'translateX(50%)'
      }}
    />
  )
}

export default Player
