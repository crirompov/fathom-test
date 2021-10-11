configuration();

function configuration(){
    var app = document.getElementById('jokesDiv');

var container = document.createElement('div');

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:9000/api/fathom-jokes/V0/jokes', true);
request.setRequestHeader("Content-Type", "application/json");
request.onload = function () {

// Begin accessing JSON jokes here
var jokes = JSON.parse(this.response);
  if (request.status == 200 ) {
      var previousCard = null;
      var previusButtonNextJoke = null;
    jokes.forEach((joke, index) => {
      var card = document.createElement('div');
      card.setAttribute('id', joke.id);
      card.setAttribute('class', 'card');
      if(joke.id != 2){
          card.setAttribute('hidden', true);
      }
      var h1 = document.createElement('h1');
      h1.setAttribute('id', 'h1-'+joke.id);
      h1.textContent = joke.setup;

      var p = document.createElement('p');
      p.setAttribute('hidden', true);
      p.setAttribute('id', 'p-'+joke.id);
      p.textContent = joke.punchline;
    
      //Create buttons per jokes.
      let buttonShowPunchline = document.createElement('button');
      buttonShowPunchline.setAttribute('id', 'button-punchline-'+joke.id);
      buttonShowPunchline.setAttribute('class', 'bottom');
      buttonShowPunchline.onclick = function () {
        var h1 = document.getElementById('h1-'+joke.id);
        h1.setAttribute('hidden', true);
        var p = document.getElementById('p-'+joke.id);
        p.removeAttribute('hidden');
        var buttonShowPunchline = document.getElementById('button-punchline-'+joke.id);
        buttonShowPunchline.setAttribute('disable', true);
      };        
      buttonShowPunchline.textContent = 'Show me the punchline';

      if (jokes[jokes.lenghth-1] != joke){
        var buttonNextJoke = document.createElement('button');
        buttonNextJoke.setAttribute('id', 'button-next-'+joke.id);     
        buttonNextJoke.textContent = 'Next';
        buttonNextJoke.setAttribute('class', 'bottom');
        buttonNextJoke.onclick = function () {
          var card = document.getElementById(joke.id);
          card.setAttribute('hidden', true);
          var nextCard = document.getElementById(Number.parseInt(joke.id) + 1);
          nextCard.removeAttribute('hidden');
        };
        previusButtonNextJoke = buttonNextJoke;
      }
      app.appendChild(container)
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(buttonShowPunchline);
      card.appendChild(buttonNextJoke);

      previousCard = card;

    });
  } else {
    var errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Something it's not working`;
    app.appendChild(errorMessage);
  }
}

request.send();
}
