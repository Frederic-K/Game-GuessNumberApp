// Router
import { useNavigate } from 'react-router-dom'
// MUI
import { Box, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ContactPageIcon from '@mui/icons-material/ContactPage'
// Asset
import bannerBckground from '../../assets/Background/wallpaperflare.com_wallpaper-11-banner.jpg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box
      component="header"
      position="fixed"
      // position="static"
      sx={{
        width: '100%',
        height: '45px',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '1',
        backgroundImage: `url(${bannerBckground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Button
        // variant="contained"
        aria-label="Go Homepage"
        onClick={() => {
          navigate('/')
        }}
        sx={{
          '&:hover': { color: 'secondary.main' },
        }}
      >
        <HomeIcon />
      </Button>
      <Button
        // variant="contained"
        aria-label="Contact"
        onClick={() => {
          navigate('/contact')
        }}
        sx={{
          '&:hover': { color: 'secondary.main' },
        }}
      >
        <ContactPageIcon />
      </Button>
    </Box>
  )
}

export default Header
