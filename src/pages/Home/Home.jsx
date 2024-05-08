// React
import { useState, useEffect } from 'react'
// MUI
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  IconButton,
  TextField,
  Link,
} from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  addPlayerName,
  clearPlayerName,
} from '../../features/PlayerName/playerNameSlice'
import {
  addMaxNumber,
  clearMaxNumber,
} from '../../features/MaxNumber/maxNumberSlice'
import { modeThemeSelector } from '../../features/ModeTheme/modeThemeSlice'
// Router
import { useNavigate } from 'react-router-dom'
// Assets
import cimentDarkBckground from '../../assets/Background/cimentDarkWallpaper.jpg'
import FKLogo from '../../assets/Logo/LogoFK-waterpx-red3-100px.png'
// Services
import CheckInputValues from '../../services/CheckInputValues/CheckInputValues'

const Home = () => {
  // Redux
  const dispatch = useDispatch()
  const { modeTheme } = useSelector(modeThemeSelector)
  // Router
  const navigate = useNavigate()

  // Validation data state
  const [errors, setErrors] = useState({})
  // Handle reset
  const [submitting, setSubmitting] = useState(false)

  // Input state
  const [starterInput, setStarterInput] = useState({
    playerName: '',
    maxNumber: '',
  })

  // Update input
  const handleChangeInput = (e) => {
    e.preventDefault()
    setStarterInput({
      ...starterInput,
      [e.target.name]: e.target.value,
    })
  }

  // Launch datas checking
  const handelSubmitClick = (e) => {
    e.preventDefault()
    setErrors(CheckInputValues(starterInput))
    setSubmitting(true)
  }

  // Validate datas
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      submitValidatedDatas()
    }
    // eslint-disable-next-line
  }, [errors])

  const submitValidatedDatas = () => {
    console.log('toto', starterInput)
    dispatch(addPlayerName(starterInput.playerName))
    dispatch(addMaxNumber(starterInput.maxNumber))
    navigate('/game')
  }

  const handelRestartClick = () => {
    setStarterInput({
      ...starterInput,
      playerName: '',
      maxNumber: '',
    })
    setSubmitting(false)
    setErrors({})
    dispatch(clearPlayerName())
    dispatch(clearMaxNumber())
  }

  return (
    <Container
      maxWidth="false"
      component="main"
      sx={{
        minHeight: '100vh',
        py: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${cimentDarkBckground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Paper
        elevation={6}
        component="form"
        className="paper__bg--radial"
        onSubmit={(e) => handelSubmitClick(e)}
        sx={{
          width: '100%',
          maxWidth: '310px',
          minHeight: '480px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeIn 1.5s forwards',
        }}
      >
        <Typography
          variant="h5"
          className="home__title"
          sx={{ fontWeight: 700, my: '30px', px: '5px', textAlign: 'center' }}
        >
          Welcome to Guess number mini-game !
        </Typography>
        <Box
          component="section"
          aria-label="Input section"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            mb: '20px',
          }}
        >
          <TextField
            error={!!errors.playerName}
            aria-label="Your Player Name"
            autoFocus={true}
            id={'playerName'}
            name={'playerName'}
            label={'Name'}
            helperText={
              errors.playerName ? errors.playerName : 'Choose your player name'
            }
            value={starterInput.playerName}
            onChange={(e) => handleChangeInput(e)}
          />
          <TextField
            type={'number'}
            // InputProps={{ inputProps: { min: 0 } }}
            error={!!errors.maxNumber}
            aria-label="Maximum number choice"
            id={'maxNumber'}
            name={'maxNumber'}
            label={'Max number'}
            helperText={
              errors.maxNumber ? errors.maxNumber : 'Choose a max number > 0'
            }
            value={starterInput.maxNumber}
            onChange={(e) => handleChangeInput(e)}
          />
        </Box>
        <Button
          aria-label="logo"
          sx={{ p: '0px', '&:hover': { animation: 'squish-in 0.5s forwards' } }}
        >
          <Link href={'https://github.com/Frederic-K/Game-GuessNumberApp'}>
            <Avatar
              className="home__logo"
              alt="Frédéroc Kreuder Logo"
              src={FKLogo}
              sx={{ width: '50px', height: '50px', opacity: '0.6' }}
            />
          </Link>
        </Button>
        <Typography
          variant="h6"
          className="home__title"
          sx={{
            fontWeight: 700,
            mt: '10px',
            mb: '10px',
            px: '5px',
            textAlign: 'center',
          }}
        >
          Ready to PLAY ?
        </Typography>

        <Box
          component="section"
          aria-label="Button section"
          sx={{
            width: '230px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '10px',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            aria-label="Start game"
            sx={{ width: '140px', height: '40px', ml: '10px' }}
          >
            <PlayCircleOutlineIcon
              sx={{
                color: `${modeTheme !== 'dark' ? 'white' : 'dark'}`,
                '&:hover': { animation: 'rotateClockwise 1s forwards' },
              }}
            />
          </Button>
          <IconButton
            type="reset"
            aria-label="Restart"
            onClick={() => {
              handelRestartClick()
            }}
          >
            <Avatar
              sx={{
                width: '40px',
                height: '40px',
                bgcolor: 'primary.main',
              }}
            >
              <RestartAltIcon
                sx={{
                  '&:hover': {
                    animation: 'rotateCounterclockwise 1s forwards',
                  },
                }}
              />
            </Avatar>
          </IconButton>
        </Box>
      </Paper>
    </Container>
  )
}

export default Home
