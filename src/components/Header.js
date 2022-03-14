import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import {AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  MenuItem,
  Divider,
  Menu,
  

       } from '@material-ui/core';
import {AccountCircle, MenuIcon} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nameIcon:{
    margin: ' 0 10px',
  },
  divider:{
    marginTop: 4,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)


  return (
    <>
      <AppBar position="static" elevation={3}>
       <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anuncios CloneOL
          </Typography>
          <Link href={'/user/publish'} passHref>
          <Button color="inherit" variant="outlined">
            Anunciar e Vender
          </Button>
          </Link>
          <IconButton color="secondary" onClick={(e)=>{setAnchorUserMenu(e.currentTarget)}}>
            {
              true === true
             ? <Avatar src=""/>
             : <AccountCircle />
            }
          <Typography variant="subtitle2" color="secondary" className={classes.nameIcon}>
            Tiago Machado
          </Typography>
          </IconButton>

          <Menu anchorEl={anchorUserMenu}
           open={anchorUserMenu}
           onClose={()=>
             setAnchorUserMenu(null)}
             anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
             }}
           
          >   
           <Link href="/user/dashboard" passHref> 
            <MenuItem>Meus anúncios</MenuItem>
            </Link>
            <Link href="/user/publish" passHref>
            <MenuItem>Publicar novos anúncios</MenuItem>
            </Link>
            <Divider className={classes.divider}/>
            <MenuItem>Sair</MenuItem>

          </Menu>
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
