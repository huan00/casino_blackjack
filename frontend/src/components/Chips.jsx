import React from 'react'
import { Box } from '@mui/material'
import { RedChip, BlueChip, GreenChip, BlackChip } from '../styles/MuiChip'

const Chips = ({ styles }) => {
  return (
    <div className={styles}>
      <Box
        style={{
          display: 'grid',
          gridTemplate: '1fr 1fr / 1fr 1fr'
        }}
      >
        <RedChip label="5" />
        <BlueChip label="10" />
        <GreenChip label="25" />
        <BlackChip label="100" />
      </Box>
    </div>
  )
}

export default Chips
