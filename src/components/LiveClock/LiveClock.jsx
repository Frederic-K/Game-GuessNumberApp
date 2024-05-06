// React
import { useState, useEffect } from 'react'
// MUI
import { Box, Typography } from '@mui/material'

export default function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <Box aria-label="Clock">
      <Typography sx={{ color: 'primary.main' }}>
        {time.toLocaleTimeString()}
      </Typography>
    </Box>
  )
}
