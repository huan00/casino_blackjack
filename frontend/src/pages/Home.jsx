import { Avatar, ButtonGroup, Chip, Button, Box } from '@mui/material'
import React from 'react'
import '../styles/App.css'

const Home = () => {
  return (
    <div className="home">
      <div className="blackjack-table">
        <Chip
          avatar={<Avatar />}
          label="dealer"
          color="secondary"
          variant="outlined"
          size="large"
          style={{
            position: 'absolute',
            right: '50%',
            top: 200,
            transform: 'translateX(50%)'
          }}
        />
        <Chip
          avatar={<Avatar />}
          label="player1"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', right: 20, bottom: 200 }}
        />
        <Chip
          avatar={<Avatar />}
          label="player2"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', right: 100, bottom: 100 }}
        />
        <Chip
          avatar={<Avatar />}
          label="player3"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', right: 250, bottom: 20 }}
        />
        <Chip
          avatar={<Avatar />}
          label="player4"
          color="primary"
          variant="outlined"
          size="large"
          style={{
            position: 'absolute',
            right: '50%',
            bottom: 0,
            transform: 'translateX(50%)'
          }}
        />
        <Chip
          avatar={<Avatar />}
          label="player5"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', left: 250, bottom: 20 }}
        />
        <Chip
          avatar={<Avatar />}
          label="player6"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', left: 100, bottom: 100 }}
        />
        <Chip
          avatar={<Avatar />}
          label="player7"
          color="primary"
          variant="outlined"
          size="large"
          style={{ position: 'absolute', left: 20, bottom: 200 }}
        />
        <Box
          style={{
            position: 'absolute',
            right: 170,
            bottom: 250,
            borderRadius: 50,
            transform: 'rotate(-45deg)'
          }}
        >
          <Chip label="5" size="small" color="warning" />
          <Chip label="10" size="small" color="warning" />
          <Chip label="25" size="small" color="warning" />
          <Chip
            label="100"
            size="small"
            color="warning"
            style={{ fontSize: '10' }}
          />
        </Box>
      </div>
    </div>
  )
}

export default Home
