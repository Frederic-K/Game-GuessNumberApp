// MUI
import { Avatar, Box, Container, Link, Paper, Typography } from '@mui/material'
// Data
import { contactList } from '../../services/data/contactList'
// Assets
import cimentDarkBckground from '../../assets/Background/cimentDarkWallpaper.jpg'
// Components
import Typewriter from '../../components/Typewriter/Typewriter'

export default function Contacts() {
  return (
    <Container
      maxWidth="false"
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper className="paper__bg--radial" sx={{ width: '310px', mb: 2 }}>
          <Typography
            className="contact__title"
            variant="h4"
            noWrap
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textAlign: 'center',
              border: '1px solid black',
              borderRadius: '5px',
              p: 1,
              animation: 'fadeIn 1.5s forwards',
            }}
          >
            <Typewriter text="Contact" delay={100} />
          </Typography>
        </Paper>
        <Paper
          className="paper__bg--radial"
          sx={{
            width: '310px',
            minHeight: '325px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            animation: 'fadeIn 1.5s forwards',
          }}
        >
          {contactList.map((el) => (
            <Box
              className={`contact__type--${el.contactID}`}
              key={`${el.contactID}${el.contactType}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Avatar
                src={el.iconContactPath}
                alt={`Icon ${el.contactType}`}
                sx={{ width: 45, height: 45, p: 1 }}
              />
              <Link
                href={el.contactLink}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography
                  sx={{
                    fontSize: '13.5px',
                    // color: `${modeTheme !== 'dark' ? 'black' : 'white'}`,
                  }}
                >
                  {el.contactContent}
                </Typography>
              </Link>
            </Box>
          ))}
        </Paper>
      </Box>
    </Container>
  )
}
