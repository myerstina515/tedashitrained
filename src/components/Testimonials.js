import React from 'react';
import './Testimonials.scss';
import tedashiCover from '../assets/TedashiCoverPage.jpg';

const Testimonials = () => {
  return (
    <>
      <img id="coverPhoto" alt="Tedashi with battle ropes on bosu ball" src={tedashiCover} />
      {/* <span class="yelp-review" data-review-id="a16B4daei2G5Jk9MjDhE_Q" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oJtWN4kQi5wbOEbnyzjtCw" rel="nofollow noopener">Nathania K.</a>'s <a href="https://www.yelp.com/biz/24-hour-fitness-everett-everett?hrid=a16B4daei2G5Jk9MjDhE_Q" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/o-Ba4D9E2w8mYu-rEDFoew" rel="nofollow noopener">24 Hour Fitness - Everett</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
      {/* <p id="instructions">Click the logo below to see full review on Facebook:</p> */}
      <div id="moreReviews">
        Check out more reviews on <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zIsvN8orSDM3YLRSNagwNbE0MDC1SEozTUlOS7QwtjKoSDM2Nk0zTTOxTDJIMk1LMvESScsvSi1LLVJIyk-pVEjLLMlLLS4GAEvBF4Q&q=forever+body+fitness&rlz=1C5CHFA_enUS917US920&oq=forever&aqs=chrome.1.69i60j46i39i175i199i650j46i67i199i433i465i650j0i67i395i650j0i67i131i395i433i650j69i60j5j69i61.2999j1j7&sourceid=chrome&ie=UTF-8#lrd=0x5490058bf5dcfa83:0xf335f5f49b0b5fb4,1,,,,">Google</a> and <a href="https://www.yelp.com/biz/forever-body-fitness-lynnwood?adjust_creative=mapquest&utm_campaign=yelp_feed&utm_medium=feed_v2&utm_source=mapquest#reviews">Yelp</a>!
      </div>
      <div class="container">
        <div>
          <iframe class="reviews" title="reviewOne" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falexandra.johnson.79%2Fposts%2F3217419251720228&width=350&show_text=true&height=819&appId" width="350" height="830" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewFour" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmike.lambert.9655%2Fposts%2F10217923386104245&width=350&show_text=true&height=200&appId" width="350" height="150" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewSix" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgino.moraga%2Fposts%2F2202728409864149&width=350&show_text=true&height=207&appId" width="350" height="207" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div>
          <iframe class="reviews" title="reviewTwo" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fposhchick168%2Fposts%2F2660840540820611&width=350&show_text=true&height=300&appId" width="350" height="280" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewThree" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcatherine.lamoureux.9%2Fposts%2F10215333708530523&width=350&show_text=true&height=175&appId" width="350" height="200" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewFive" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdar.seymour%2Fposts%2F10160720282877598&width=350&show_text=true&height=251&appId" width="350" height="275" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewSeven" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fadilene.gaulrapp%2Fposts%2F10208402532378764&width=350&show_text=true&height=329&appId" width="350" height="329" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </>
  )
}
export default Testimonials;
