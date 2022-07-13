import { Avatar, Box, Chip, Container, Grid } from '@mui/material'
import React from 'react'
import '../styles/App.css'
import Chips from '../components/Chips'
import cardBack from '../assets/images/card_back.png'
import king from '../assets/images/king.png'
import { height } from '@mui/system'

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
          <Box
            sx={{
              backgroundImage: `url(${cardBack})`,
              backgroundSize: '40px, 40px',
              backgroundRepeat: 'no-repeat',
              width: 40,
              height: 60,

              position: 'absolute',
              top: 270,
              left: 300
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${cardBack})`,
              backgroundSize: '40px, 40px',
              backgroundRepeat: 'no-repeat',
              width: 40,
              height: 60,
              border: '1px solid black',
              position: 'absolute',
              top: 270,
              left: 700
            }}
          />
          <Box //Dealer card
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 400,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box //Player one
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 420,
              left: 723,
              transform: 'rotate(-53deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box //Player Two
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 490,
              left: 655,
              transform: 'rotate(-35deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box // player-three
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 530,
              left: 570,
              transform: 'rotate(-17deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box // player-four
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 545,
              left: 475
              // transform: 'rotate(-17deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box // player-five
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 526,
              left: 380,
              transform: 'rotate(17deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box // player-six
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 485,
              left: 300,
              transform: 'rotate(37deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          <Box // player-seven
            sx={{
              backgroundImage: `url(${king})`,
              backgroundSize: '35px, 50px',
              backgroundRepeat: 'no-repeat',
              width: 35,
              height: 50,

              position: 'absolute',
              top: 415,
              left: 235,
              transform: 'rotate(55deg)'
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${king})`,
                backgroundSize: '35px, 50px',
                height: 50,
                width: 35,
                ml: 2
              }}
            ></Box>
          </Box>
          {/* Bets */}
          <Chip //player one bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 460,
              left: 765,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player two bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 540,
              left: 690,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player two bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 540,
              left: 690,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player three bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 590,
              left: 600,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player four bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 600,
              left: 490,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player five bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 590,
              left: 380,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player six bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 540,
              left: 280,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
          <Chip //player seven bets
            label="15"
            sx={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              position: 'absolute',
              top: 460,
              left: 200,
              '& .MuiChip-label': { fontSize: 10, padding: 0, color: 'white' }
            }}
          />
        </Box>
      </Container>
    </div>
  )
}

export default Home
