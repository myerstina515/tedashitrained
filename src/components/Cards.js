import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Adi from '../assets/AdiOnline.PNG';
import Stephanie from '../assets/stephanie.PNG';
import Nora from '../assets/Nora.PNG';
import './Cards.scss';



const Cards = () => {
  return (
    <>
      <div class="container2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div id="stephanie" class="flip-card-front">
              <img class="cardBackground" alt="Group Training" src={Stephanie} />

              <a href="./Services" id="cardDesc">Group Training</a>

            </div>
            <div class="flip-card-back">
              <Grid className="externalBorder" item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent className="backContent">
                    <Typography id="question" color="textSecondary" gutterBottom>
                      Group Training - Providing a safe place to workout with others that just want to better themselves in a fun, interactive environment where no matter what level you are at, there will be progressions or modifications available to keep you safe!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <a href="./Services" id="cardDesc">Group Training</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div id="stephanie" class="flip-card-front">
              <img class="cardBackground" alt="One on One Training" src={Nora} />

              <a id="cardDesc" href="/services">One on One Training</a>

            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography id="question" color="textSecondary" gutterBottom>
                    One-on-one Training - Sometimes we need that extra accountability, little bit of knowledge, or sometimes we need someone who can just make it fun. The most popular and safest service is this, with the fastest way to start the work on your "Forever Body"!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <a id="cardDesc" href="/services">One on One Training</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div id="stephanie" class="flip-card-front">
              <img class="cardBackground" alt="Online Training" src={Adi} />

              <a href="/Services" id="cardDesc">Online Training</a>

            </div>
            <div class="flip-card-back">
              <Grid item xs={12}>
                <Card className="root" variant="outlined">
                  <CardContent class="backContent">
                    <Typography id="question" color="textSecondary" gutterBottom>
                      Online Coaching - Not in the area? Traveling? Would you rather workout at home? This is a great option for those who are motivated, but have an incredibly busy schedule: attend zoom session or be provided with custom workout plans on your schedule!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <a href="/Services" id="cardDesc">Online Training</a>
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