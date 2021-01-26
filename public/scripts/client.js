/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




$(document).ready(function() {
const renderTweets = function(tweets) {
  for (let information of tweets) {
    console.log(information.created_at)
    const $section = 
    `
    <article>
            <div class="article-head">
              <img src="${information.user.avatars}" alt="">
              <h4>${information.user.name}</h4>           
               <small>${information.user.handle}</small>
            </div>   
            <h5>${information.content.text}</h5>
            <hr>
            <div class="article-footer">
              <h5>${information.created_at}</h5>
              <small>
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
                </small> 
            </div>
          
    </article>
 
    `
    $("#newsection").append($section)
   // $section.appendTo(document.body);
  }
  
}
renderTweets(data)
});

// const createTweetElement = function(tweet) {
//   let $tweet = JSON.parse("../")
//   const section = 
//   `
//   <section class="tweets-section">
//     <article>
//       <div class="article-head">
//         <img src="${tweet.user.avatars}" alt="">
//         <h4>${tweet.user.name}</h4>           
//         <small>${tweet.user.handle}</small>
//       </div>   
//       <h5>${tweet.content}</h5>
//       <hr>
//       <div class="article-footer">
//         <h5>${tweet.created_at}</h5>
//         <small>
//           <i class="fas fa-flag"></i>
//           <i class="fas fa-retweet"></i>
//           <i class="fas fa-heart"></i>
//           </small> 
//       </div>      
//     </article>
//   </section>
//   `
//   return $tweet;
// }




// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//htlm element to render
{/* <section class="tweets-section" id="tweets-section">
        <article>
          <div class="article-head">
            <img src="https://i.imgur.com/nlhLi3I.png" alt="">
            <h4>This will be the name of the tweeter  </h4>
            
             <small>  @ name</small>
          </div>   
          <h5>Blabla bla, I am important, blablabla  </h5>
          <hr>
          <div class="article-footer">
            <h5>This will be how long is the post  </h5>
            <small>
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
              </small> 
          </div>
        
        </article>
  </section> */}