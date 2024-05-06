import { Container, Paper, Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'

const PageError = () => {
  const error = useRouteError()
  return (
    <Container>
      <Paper>
        <Typography>Oops an error occurred !!!!!</Typography>
        <Typography>
          {error?.error?.toString() ?? error?.toString()}{' '}
        </Typography>
      </Paper>
    </Container>
  )
}

export default PageError
