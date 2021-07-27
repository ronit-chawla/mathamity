import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function App() {
  const [
    numDays,
    setNumDays
  ] = useState(0);
  const [
    semiMajorAxis,
    setSemiMajorAxis
  ] = useState(null);
  const [
    distFromSun,
    setDistFromSun
  ] = useState(null);
  const [
    orbitalTime,
    setOrbitalTime
  ] = useState(null);
  return (
    <>
      <div
        style={{
          backgroundImage: '-webkit-linear-gradient(to right, #004e92, #000428)',
          background: 'linear-gradient(to right, #004e92, #000428)',
          // height:'100vh',
          // width:'100vw',
          // display:'flex',
          // alignItems:'center',
        }}
      >
          <Typography variant="h1"style={{textAlign:'center',color:'white'}}>Mathamity</Typography>

        <Grid container spacing={4}>
          <div style={{         
             height:'100vh',
            width:'100vw',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around'
          }}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  Find Semimajor Axis(longest
                  radius) of a planets orbit
                </Typography>
                <Typography color="textSecondary">
                  formula = √(Orbital Time in
                  Days/365)AU
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Orbital Time in Days"
                  type="number"
                  value={numDays}
                  onChange={e =>
                    setNumDays(
                      parseFloat(
                        e.target.value
                      ) || null
                    )}
                />
                {distFromSun && (
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                  >
                    {distFromSun}{' '}
                    Astronomical Units
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    const sunDistance = Math.cbrt(
                      (numDays / 365) ** 2
                    );
                    setDistFromSun(
                      sunDistance
                    );
                  }}
                >
                  Find Distance
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  Find Orbital Time
                </Typography>
                <Typography color="textSecondary">
                  formula = ∛Semimajor Axis in
                  AU * 365 days
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Semimajor Axis in AU"
                  type="number"
                  value={semiMajorAxis}
                  onChange={e =>
                    setSemiMajorAxis(
                      parseFloat(
                        e.target.value
                      ) || null
                    )}
                />
                {orbitalTime && (
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    gutterBottom
                  >
                    {orbitalTime} Days
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    const semiMajorAxisCb =
                      semiMajorAxis ** 3;
                    const orbitalTime =
                      Math.sqrt(
                        semiMajorAxisCb
                      ) * 365;
                    setOrbitalTime(
                      orbitalTime
                    );
                  }}
                >
                  Find Orbital Time
                </Button>
              </CardActions>
            </Card>
          </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default App;
