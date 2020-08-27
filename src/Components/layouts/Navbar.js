import React from 'react'
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Typography,
  Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navbar = ({ handleSidebarOpen }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar} elevation={5}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton onClick={handleSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="subtitle1" noWrap>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
            longform nl_nl_test_set Written Domain Conventions
          </Link>
        </Typography>
        <span style={{ flexGrow: 1 }}></span>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <IconButton style={{ margin: '0 1rem', color: 'rgb(187, 53, 53)' }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

// styles

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,0.8)',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ebebeb',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
