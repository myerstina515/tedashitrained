import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Weights from '../assets/weightsServices.jpg';
import Stephanie from '../assets/stephanie.PNG';
import './Cards.scss';



const Cards = () => {
  return (
    <>
      <div class="container2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div id="stephanie" class="flip-card-front">
              <img id="stephanie" alt="card content" src={Stephanie} />
            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                      Insert text here
                  </Typography>
                    <Button>click</Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img alt="card content" src={Weights} />
            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                      Insert text here
                  </Typography>
                    <Button>click</Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img alt="card content" src={Weights} />
            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                      Insert text here
                  </Typography>
                    <Button>click</Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>
        {/* <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img alt="card content" src={Weights} />
            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography className="question" color="textSecondary" gutterBottom>
                      Insert text here
                  </Typography>
                    <Button></Button>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
export default Cards;