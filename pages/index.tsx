import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box bgcolor={blue[400]} width="100vw" height="100vh">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Box className={classes.root} p={10}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <Paper className={classes.paper} elevation={8}>
                Welcome to Material UI using Next.js
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
