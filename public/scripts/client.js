$(document).ready(function() {
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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

  const warning = function(warn) {
    $("#warning").slideDown("slow").html(warn);
  };

  const loadTweets = function() {
    $.get("/tweets/", function(response) {
      renderTweets(response);
    });
  };

  const clearArticle = function() {
    $(".tweets-section").empty();
  };

  const resetCounter = function() {
    const resetVal = 140;
    $(".counter").val(resetVal)
  }

  const newTweetEvent = function() {
    $("#form1").submit(function(event) {
      event.preventDefault();
      if (!$("#tweet-text").val()) {
        return warning("You must enter text here !!!");
      }
      if ($(".counter").val() < 0) {
        return warning("Maximum character exeeded for the tweet !!!");
      }

      $.post("/tweets/", $(this).serialize()).done(function() {
        clearArticle();
        loadTweets();
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




