import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MediaCard from './components/MediaCard'

const useStyles = makeStyles(() => ({
  menuButton: {
    marginRight: '1rem'
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '&:not(:last-child)': {
      marginRight: '1.35rem'
    },
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3.5rem 0 5rem',
    '& p': {
      margin: '1.35rem',
      textAlign: 'center',
    }
  },
  heroText: {
    maxWidth: '50%',
  },
  heroButtons: {
    flexDirection: 'row',
    textAlign: 'center',
    '& button': {    
      margin: '0.75rem',
    },
  },
  footer: {
    textAlign: 'center',
    margin: '3rem 0 2rem',
  },
}));;

function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {!matches && (
              <IconButton edge="start" className={classes.menuButton} color="inherit">
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            <Button color="inherit" className={classes.button}>Register</Button>
            <Button color="inherit" className={classes.button}>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <div className={classes.hero}>
          <Typography variant="h3">
            Heading Text
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={matches ? classes.heroText : ''}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc. Consectetur adipiscing 
            elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <div className={classes.heroButtons}>
            <Button variant="contained" color="primary">
              Call to Action
            </Button>
            <Button variant="outlined" color="primary">
              Call to Action
            </Button>
          </div>
        </div>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {[1,2,3,4,5,6].map(() => (
            <MediaCard />
            ))}
        </Box>
        <div className={classes.footer}>
          <Typography variant="h5">
            Footer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            © 2020 Copyright Text
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default App;
