import { Avatar, Box, Chip, Container } from '@mui/material'
import React from 'react'
import '../styles/App.css'
import Chips from '../components/Chips'

const Home = () => {
  return (
    <div className="home">
      <Container maxWidth="lg">
        <Box className="blackjack-table">
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

          <Chips styles={'player-one'} />
          <Chips styles={'player-two'} />
          <Chips styles={'player-three'} />
          <Chips styles={'player-four'} />
          <Chips styles={'player-five'} />
          <Chips styles={'player-six'} />
          <Chips styles={'player-seven'} />
        </Box>
      </Container>
    </div>
  )
}

export default Home
