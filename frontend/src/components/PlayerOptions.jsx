import { ButtonGroup, Button, Box } from '@mui/material'
import React from 'react'

const PlayerOptions = ({ styles, handlePlayerOption }) => {
  const playerOptions = ['stay', 'hit', 'split', 'double-down', 'insurance']
  return (
    <Box sx={{ ...styles }}>
      <ButtonGroup variant="contained" primary>
        <Button onClick={() => handlePlayerOption(playerOptions[0])}>
          {playerOptions[0]}
        </Button>
        <Button onClick={() => handlePlayerOption(playerOptions[1])}>
          {playerOptions[1]}
        </Button>
        <Button>{playerOptions[2]}</Button>
        <Button>{playerOptions[3]}</Button>
      </ButtonGroup>
    </Box>
  )
}

export default PlayerOptions
