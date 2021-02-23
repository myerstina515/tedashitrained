import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Weights from '../assets/weightsServices.jpg';
import './Cards.scss';

const Cards = () => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img alt="card content" src={Weights}/>

          {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../assets/weightsServices.jpg' />
              <Card.Body>
                <Card.Title>Services</Card.Title>
                <Card.Text>
                  This is the front of the card
                </Card.Text>
                <Button variant="primary">Click here</Button>
              </Card.Body>
            </Card> */}
          </div>
          <div class="flip-card-back">
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Services Details</Card.Title>
                <Card.Text>
                  This is the back of the card
                </Card.Text>
                <Button variant="primary">Click here</Button>
              </Card.Body>
            </Card> */}
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
      </div>
    </>
  )
}
export default Cards;