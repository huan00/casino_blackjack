import { Avatar, Box, Chip, Container, Button, Grid } from '@mui/material'
import { useState } from 'react'
import '../styles/App.css'
import Chips from '../components/Chips'
import cardBack from '../assets/images/card_back.png'
import king from '../assets/images/king.png'
import { decks, shaffleEight } from '../utilities/Cards'
import cards from '../utilities/CardRankImage.json'
import { PlayerCards, PlayerAvatars, PlayerChips } from '../styles/PlayerCard'
import PlayerOptions from '../components/PlayerOptions'
import { flexbox } from '@mui/system'

const Home = () => {
  const eightDecksShaffled = shaffleEight(cards.cards)
  const [shoe, setShoe] = useState(eightDecksShaffled)

  const players = [
    'playerOne',
    'playerTwo',
    'playerThree',
    'playerFour',
    'playerFive',
    'playerSix',
    'playerSeven',
    'dealer'
  ]
  const [numPlayer, setNumPlayer] = useState(8)
  const [activePlayer, setActivePlayer] = useState(0)
  const [playOption, setPlayOption] = useState('')
  const [playerStatus, setPlayerStatus] = useState([
    { playerOne: true, bet: '', hand: [], busted: false },
    { playerTwo: true, bet: '', hand: [], busted: false },
    { playerThree: true, bet: '', hand: [], busted: false },
    { playerFour: true, bet: '', hand: [], busted: false },
    { playerFive: true, bet: '', hand: [], busted: false },
    { playerSix: true, bet: '', hand: [], busted: false },
    { playerSeven: true, bet: '', hand: [], busted: false },
    { dealer: true, hand: [], busted: false }
  ])

  const dealNewHands = (numPlayer) => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < numPlayer; j++) {
        const card = shoe.pop()
        setPlayerStatus(
          (playerStatus) => [...playerStatus],
          playerStatus[j].hand.push(card)
        )
      }
    }
    setActivePlayer(0)
  }

  const startGame = (playOption) => {
    switch (playOption) {
      case 'stay':
        setActivePlayer((activePlayer) => activePlayer + 1)
        break
      case 'hit':
        playerStatus[activePlayer].hand.push(shoe.pop())
        console.log('hitteed')
        break
      default:
        setActivePlayer((activePlayer) => activePlayer + 1)
        break
    }
  }

  const handlePlayerOption = (option) => {
    setPlayOption(option)
    startGame(option, activePlayer)
    console.log(playerStatus)
  }

  const hit = (player) => {
    player.hand.push(shoe.pop())
  }

  const dealCard = (shoe) => {
    const temp = [...shoe]
    const card = temp.pop()
    setShoe(temp)
    return card
  }

  return (
    <div className="home">
      <Container maxWidth="lg">
        <Box className="table">
          <Box className="table-bg"></Box>
          {/* Avatar */}
          {players.map((player, idx) => (
            <Chip
              key={idx}
              label={player}
              avatar={<Avatar />}
              color="primary"
              variant="outlined"
              size="large"
              style={{ ...PlayerAvatars[player] }}
            />
          ))}
          {/* player options */}
          <PlayerOptions
            handlePlayerOption={handlePlayerOption}
            styles={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%)'
            }}
          />
          {/* player chips */}
          {players.map((chips) => (
            <Chips sx={{ ...PlayerChips[chips] }} />
          ))}
          {/* player hand */}
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
            onClick={() => dealNewHands(numPlayer)}
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

          {playerStatus[0].hand[0] &&
            playerStatus.map((player, idx) => (
              <Grid
                container
                spacing={0}
                key={idx}
                sx={{
                  ...PlayerCards.card,
                  ...PlayerCards[players[idx]]
                }}
              >
                {player.hand.map((card) => (
                  <Grid item xs={2}>
                    <Box
                      sx={{
                        ...PlayerCards.cardTwo,
                        backgroundImage: `url(${card.img})`
                      }}
                    ></Box>
                  </Grid>
                ))}
              </Grid>
            ))}
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
