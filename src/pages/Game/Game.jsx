// React
import { useEffect, useState } from 'react'
// Router
import { useNavigate } from 'react-router-dom'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { playerNameSlector } from '../../features/PlayerName/playerNameSlice'
import { maxNumberSlector } from '../../features/MaxNumber/maxNumberSlice'
import {
  counterSelector,
  incrementCounter,
  resetCounter,
} from '../../features/Counter/counterSlice'
import {
  addScore,
  // clearScore,
  bestScoreSelector,
} from '../../features/BestScore/bestScoreSlice'
// Service
import MagicNumber from '../../services/MagicNumber/MagicNumber'
import CheckAnswer from '../../services/CheckAnswer/CheckAnswer'
// MUI
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  IconButton,
  Avatar,
  TextField,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import HomeIcon from '@mui/icons-material/Home'
// Assets
import iconTooLow from '../../assets/Icons/graphiqueBlueUp.png'
import iconTooHight from '../../assets/Icons/graphiqueRedDown.png'
import iconWin from '../../assets/Icons/winCup.png'
import iconInvalid from '../../assets/Icons/invalid.png'
import cimentDarkBckground from '../../assets/Background/cimentDarkWallpaper.jpg'
import FKLogo from '../../assets/Logo/LogoFK-waterpx-red3-100px.png'

const Game = () => {
  // Router
  const navigate = useNavigate()
  // Redux const
  const dispatch = useDispatch()
  const name = useSelector(playerNameSlector)
  const maxNum = parseInt(useSelector(maxNumberSlector))
  const counter = useSelector(counterSelector)
  const bestScore = useSelector(bestScoreSelector)

  // Set message
  const [response, setResponse] = useState('')
  // Input state
  const [answer, setAnswer] = useState('')

  // Set target number
  const [magicNumber, setMagicNumber] = useState(0)
  useEffect(() => {
    setMagicNumber(parseInt(MagicNumber(maxNum)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('magicNum', magicNumber)

  // Set best score
  useEffect(() => {
    if (response === 'win' && bestScore === 0) {
      dispatch(addScore(counter))
    } else if (response === 'win' && bestScore > counter) {
      dispatch(addScore(counter))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  // const checkAnswer = (answer) => {
  //   if (answer > magicNumber) {
  //     setResponse('hight')
  //   } else if (answer < magicNumber) {
  //     setResponse('low')
  //   } else if (answer === magicNumber) {
  //     setResponse('win')
  //   } else {
  //     setResponse('invalid')
  //   }
  // }

  const handleChangeInput = (e) => {
    e.preventDefault()
    setAnswer(e.target.value)
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    dispatch(incrementCounter())
    setResponse(CheckAnswer(parseInt(answer), magicNumber))
  }

  const handleRestartClick = (e) => {
    e.preventDefault()
    dispatch(resetCounter())
    setAnswer('')
    setResponse('')
    setMagicNumber(MagicNumber(maxNum))
  }

  const handleBckHomeClick = () => {
    dispatch(resetCounter())
    navigate('/')
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
        onSubmit={(e) => {
          handleSubmitAnswer(e)
        }}
        sx={{
          width: '100%',
          maxWidth: '310px',
          minHeight: '480px',
          position: 'relative',
        }}
      >
        <Box aria-label="Title">
          <Typography
            variant="h5"
            className="game__title"
            sx={{
              fontWeight: 700,
              mt: '25px',
              textAlign: 'center',
            }}
          >
            Welcome <br /> {name}
          </Typography>
        </Box>
        <Typography
          sx={{ mt: '5px', mb: '15px', fontWeight: 700, textAlign: 'center' }}
        >
          Choose a number between <br /> 0 - {maxNum}
        </Typography>
        <Box
          component="section"
          aria-label="Game zone"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Box component="article" aria-label="Input section">
            <TextField
              type={'number'}
              aria-label="Answer"
              autoFocus={false}
              id={'answer'}
              name={'answer'}
              label={'Try to guess :)'}
              value={answer}
              onChange={(e) => handleChangeInput(e)}
            />
          </Box>
          <Box
            component="section"
            aria-label="Buttons section"
            sx={{
              width: '240px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              type="submit"
              aria-label="Submit button"
              sx={{
                width: '100px',
                height: '40px',
                ml: '10px',
                color: 'white',
              }}
            >
              <SendIcon />
            </Button>
            <Box>
              <IconButton
                variant="contained"
                aria-label="Restart button"
                onClick={(e) => {
                  handleRestartClick(e)
                }}
                sx={{ color: 'white' }}
              >
                <Avatar
                  sx={{
                    width: '40px',
                    height: '40px',
                    bgcolor: 'primary.main',
                  }}
                >
                  <RestartAltIcon />
                </Avatar>
              </IconButton>
              <IconButton
                variant="contained"
                aria-label="Back Homepage"
                onClick={() => {
                  handleBckHomeClick()
                }}
                sx={{ color: 'white' }}
              >
                <Avatar
                  sx={{
                    width: '40px',
                    height: '40px',
                    bgcolor: 'primary.main',
                  }}
                >
                  <HomeIcon />
                </Avatar>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '20px',
          }}
        >
          {response === 'low' ? (
            <Box
              sx={{
                mt: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <img
                className="resp__icon--tooLow"
                src={iconTooLow}
                alt="Too low"
              />
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                Too low, retry !
              </Typography>
            </Box>
          ) : response === 'hight' ? (
            <Box
              sx={{
                mt: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <img
                className="resp__icon--tooHight"
                src={iconTooHight}
                alt="Too hight"
              />
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                Too hight, retry !
              </Typography>
            </Box>
          ) : response === 'win' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <img className="resp__icon--win" src={iconWin} alt="Too hight" />
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                Congratz, you win !
              </Typography>
            </Box>
          ) : response === 'invalid' ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                mt: '10px',
              }}
            >
              <img
                className="resp__icon--invalid"
                src={iconInvalid}
                alt="Invalid entry"
              />
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                Invalid entry, retry !
              </Typography>
            </Box>
          ) : (
            <Box aria-label="logo" sx={{ my: '20px' }}>
              <Avatar
                className="home__logo"
                alt="Frédéroc Kreuder Logo"
                src={FKLogo}
                sx={{ width: '70px', height: '70px', opacity: '0.6' }}
              />
            </Box>
          )}
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            p: '10px',
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          {counter} Attempt(s)
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            p: '10px',
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Best Score : {bestScore}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Game
