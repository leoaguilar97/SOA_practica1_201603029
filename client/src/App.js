import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code';

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import './App.css';

import axios from 'axios';

const API = window.localStorage.getItem('API_URL') || 'http://localhost:5000';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,

    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }
  },
  media: {
    height: 140,
  },
  cont: {
    paddingTop: '100px',
  },
  grd: {
    minHeight: "100%",
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff",
    align: 'center',
    zIndex: '1'
  },
  pullRight: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: 'auto'
  },
  editor: {
    backgroundColor: "#fff",
    borderStyle: "none",
    borderColor: "Transparent",
    overflow: "auto"
  },

  "editor-focused": {
    border: "2px solid red",
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
  }
}));

function App() {

  const classes = useStyles();
  const [code, setCode] = React.useState(
    `
/*
    Práctica 1 - SOA
    Luis Leonel Aguilar Sánchez
    201603029
*/
    
function factorial(n) {
  if (n <= 1){
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("El factorial de 5 es: ");
factorial(5);

`);

  const [result, setResult] = React.useState([]);

  const getFromApi = async (e) => {
    try {
      console.log('Obteniendo expresion de API');
      const { data } = await axios.post(API + '/eval', { expression: code });
      console.log(data);

      setResult(data.split("\n>> ").filter(v => v && v.trim() !== ""))

    }
    catch (e) {
      console.log('Error en la API: ');
      console.error(e);

      setResult(['Error ejecutando codigo']);
    }
  }

  return (

    <React.Fragment>
      <div style={{ position: 'absolute', zIndex: '-1' }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <CssBaseline />
      <Container fixed>

        <Grid container spacing={5} justify="space-between" className={classes.cont}>
          <Grid item xs={6}  >

            <Paper elevation={3} className={classes.grd}>
              <Editor
                value={code}
                className={classes.editor}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => highlight(code, languages.js)}
                padding={20}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 15,
                }}
              />

              <Button
                variant="contained"
                color="secondary"
                size="small"
                raised
                className={classes.pullRight}
                startIcon={<CodeIcon />}
                onClick={getFromApi}
              >
                Ejecutar
      </Button>
            </Paper>

          </Grid>
          <Grid item xs={6} >
            <Paper elevation={3} className={classes.grd}>
              <List component="nav" aria-label="main mailbox folders">
                {
                  result.map(v =>
                    <ListItem button>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={v} />
                    </ListItem>
                  )
                }
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container >
    </React.Fragment >
  );
}

export default App;
