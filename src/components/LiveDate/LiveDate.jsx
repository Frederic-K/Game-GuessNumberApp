import { Box, Typography } from '@mui/material'

export default function LiveDate() {
  let today = new Date()
  let date =
    today.getDate() +
    // parseInt(today.getMonth() + 1) +
    '-' +
    // today.getDate() +
    parseInt(today.getMonth() + 1) +
    '-' +
    today.getFullYear()

  return (
    <Box className="liveDate" aria-label="Current date">
      <Typography noWrap sx={{ color: 'primary.main' }}>
        {date}
      </Typography>
    </Box>
  )
}
