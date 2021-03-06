$(document).ready(function() {

//--------------------------Helper functions-----------------------------------------------
  //Compare curent unixtime to the tweet unixtime and return human readable remaining time
  const sinceTime = (unixtime) => { 
    const curentTime = new Date().getTime();
    let since = curentTime - unixtime;
    since = Math.floor(since / 1000);
    let minutes = Math.floor(since / 60);
    let hours = 0;
    if (minutes >= 60) {
      while (minutes >= 60) {
        minutes = minutes - 60;
        hours ++;
      }
    }
    return "Posted " + hours + " h " + minutes + " m ago";
  };
  
  //Prevent cross-site xml attacks
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  //Manage warning messages for new tweets
  const warning = function(warn) {
    $("#warning").slideDown("slow").html(warn);
  };
  
  const clearArticle = function() {
    $(".tweets-section").empty();
  };
  
  const resetCounter = function() {
    const resetVal = 140;
    $(".counter").val(resetVal)
  }

  //----------------------App functions ---------------------------------------------------

  const renderTweets = function(tweets) {
    for (let information of tweets) {
      let text1 = escape(information.content.text);
      let text2 = escape(information.content.text);
      text1 = text1.slice(0, 74);
      text2 = text2.slice(75, 140);
      const $section =
        `
        <article>
          <div class="article-head">
            <img src="${information.user.avatars}" alt="">
            <h4>${information.user.name}</h4>           
              <small>${information.user.handle}</small>
          </div>   
          <h5>${text1}</h5>
          <h5>${text2}</h5>
          <hr>
          <div class="article-footer">
            <h5>${sinceTime(information.created_at)}</h5>
            <small>
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
              </small> 
          </div>     
        </article>
        `;
      $("#newsection").prepend($section);
    }
  };

  const loadTweets = function() {
    $.get("/tweets/", function(response) {
      renderTweets(response);
    });
  };

  const newTweetEvent = function() {
    $("#form1").submit(function(event) {
      event.preventDefault();
      if (!$("#tweet-text").val()) {
        return warning(`<i class="fas fa-exclamation-triangle"></i>You must enter text here !!!<i class="fas fa-exclamation-triangle"></i>`);
      }
      if ($(".counter").val() < 0) {
        return warning(`<i class="fas fa-exclamation-triangle"></i>Maximum character exeeded for the tweet !!!<i class="fas fa-exclamation-triangle"></i>`);
      }
      $.post("/tweets/", $(this).serialize()).done(function(tweet) {
        renderTweets([tweet]);
        $("#tweet-text").val("");
        warning(" ");
        resetCounter();
      }   
      );
    }
    );
  };
  //--------------------------------Function calling ------------------------------------------------
  loadTweets();
  newTweetEvent();
});