import SignUp from './components/SignUp';
import { Grid, MuiThemeProvider, Paper } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider  >
        <Grid container
          justify='center'
          alignItems='center'
          style={{ height: '100%' }}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={4}
              style={{ margin: 32 }}
            >
              <Grid container
                alignItems='center'
                justify='center'
              >
                <Grid item xs={12}
                  alignContent='center'
                  sm={6}
                  alignItems='center' justify='flex-start'
                >
                  <Grid item xs={12} sm={6} style={{ 'textAlign': 'center' }} >
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer Simpson" />
                    <SignUp />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div >
  );
}

export default App;
