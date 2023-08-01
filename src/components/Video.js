import React from 'react';
import "./Video.scss";

const Video = () => {

  //   var channelID = "UCEhGqEUv0O5gM_VvG4esW-Q";
  // var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
  // $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
  //    var link = data.items[0].link;
  //    var id = link.substr(link.indexOf("=")+1);
  // $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
  // });
  // {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> */}

  // <iframe width="600" height="340" src="https://www.youtube.com/embed/+lastest?list=PLAYLIST_ID" frameborder="0" allowfullscreen></iframe>
  return (
    <>
      <hr />
      <div id="videoSection1">
        <div>
          <iframe width="448" height="252" src="https://www.youtube.com/embed/XQbFt3pzeNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div id="videoSection" >
        {/* <p>Check out the latest video on Tedashi Trained YouTube channel: This is my description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <iframe id="video" title="video" width="300" height="200" src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=MrBeast6000" frameborder="0" allowfullscreen></iframe>
       */}
      </div>
    </>
  )
}
export default Video;