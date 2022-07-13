import { Chip } from '@mui/material'
import { styled } from '@mui/material/styles'

const MyPlayer = styled(Chip)(() => ({
  position: 'absolute'
}))

const PlayerOne = styled(MyPlayer)(() => ({
  right: 20,
  bottom: 200
}))
