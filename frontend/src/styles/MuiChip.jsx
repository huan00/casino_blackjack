import { Chip } from '@mui/material'
import { styled } from '@mui/material/styles'

const MyChip = styled(Chip)(() => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  margin: '1px',
  '& .MuiChip-label': {
    fontSize: 10,
    padding: 0,
    color: 'white'
  }
}))

export const RedChip = styled(MyChip)(() => ({
  backgroundColor: 'red'
}))
export const BlueChip = styled(MyChip)(() => ({
  backgroundColor: 'blue'
}))
export const GreenChip = styled(MyChip)(() => ({
  backgroundColor: 'green'
}))
export const BlackChip = styled(MyChip)(() => ({
  backgroundColor: 'black'
}))

export default MyChip
