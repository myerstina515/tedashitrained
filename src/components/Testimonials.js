import React from 'react';
import './Testimonials.scss';
import tedashiCover from '../assets/TedashiCoverPage.jpg';

const Testimonials = () => {
  return (
    <>
      <img id="coverPhoto" alt="Tedashi with battle ropes on bosu ball" src={tedashiCover} />
      {/* <span class="yelp-review" data-review-id="a16B4daei2G5Jk9MjDhE_Q" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oJtWN4kQi5wbOEbnyzjtCw" rel="nofollow noopener">Nathania K.</a>'s <a href="https://www.yelp.com/biz/24-hour-fitness-everett-everett?hrid=a16B4daei2G5Jk9MjDhE_Q" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/o-Ba4D9E2w8mYu-rEDFoew" rel="nofollow noopener">24 Hour Fitness - Everett</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
      <p id="instructions">Click the logo below to see full review on Facebook:</p>
      <div class="container">
        <div>
          <iframe class="reviews" title="reviewOne" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falexandra.johnson.79%2Fposts%2F3217419251720228&width=500&show_text=true&height=827&appId" width="500" height="827" scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div>
          <iframe class="reviews" title="reviewThree" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fposhchick168%2Fposts%2F2660840540820611&width=500&show_text=true&height=213&appId" width="500" height="213" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewTwo" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcatherine.lamoureux.9%2Fposts%2F10215333708530523&width=500&show_text=true&height=156&appId" width="500" height="156" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe class="reviews" title="reviewThree" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmike.lambert.9655%2Fposts%2F10217923386104245&width=500&show_text=true&height=136&appId" width="500" height="136" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </>
  )
}
export default Testimonials;
