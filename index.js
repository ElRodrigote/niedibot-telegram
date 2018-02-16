var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

//This is the route the API will call
app.post('/new-message', function(req, res) {
  const {message} = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

  if (!message) {
    // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
    return res.end()
  }

  // If we've gotten this far, it means that we have received a message containing the word "marco".
  // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
  // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
  if(message.from.username == "MatiNieda"){
    axios.post('https://api.telegram.org/bot547766556:AAEN2hYZ5FmNmQAGJogQ3O1MMLTBd8Yme8M/sendMessage', {
      chat_id: message.chat.id,
      text: 'Ay ay ay ' + message.text.toLowerCase() + ' chamacos!'
    })
      .then(response => {
        // We get here if the message was successfully posted
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        // ...and here if it was not
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  }else if(message.from.username == "DuiGF"){
    let regex1 = /([AEOU])/g;
    let regex2 = /([aeou])/g;

    let string1 = message.text.replace(regex1, "I");
    let string2 = message.text.replace(regex2, "i");

    axios.post('https://api.telegram.org/bot547766556:AAEN2hYZ5FmNmQAGJogQ3O1MMLTBd8Yme8M/sendMessage', {
      chat_id: message.chat.id,
      text: string2 
    })
      .then(response => {
        // We get here if the message was successfully posted
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        // ...and here if it was not
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  }else if(message.from.id == 372871606){ //Mauri Tracz
    let string1 = "Soy un maurillenial y esto me ofende";

    axios.post('https://api.telegram.org/bot547766556:AAEN2hYZ5FmNmQAGJogQ3O1MMLTBd8Yme8M/sendMessage', {
      chat_id: message.chat.id,
      text: string1 
    })
      .then(response => {
        // We get here if the message was successfully posted
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        // ...and here if it was not
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  }else if(message.from.username == "RODRIGOTE" && message.text == "Rodritest"){ 
    let string1 = "Estoy andando bien, Ro";

    axios.post('https://api.telegram.org/bot547766556:AAEN2hYZ5FmNmQAGJogQ3O1MMLTBd8Yme8M/sendMessage', {
      chat_id: message.chat.id,
      text: string1 
    })
      .then(response => {
        // We get here if the message was successfully posted
        console.log('Message posted')
        res.end('ok')
      })
      .catch(err => {
        // ...and here if it was not
        console.log('Error :', err)
        res.end('Error :' + err)
      })
  }
});

// Finally, start our server
app.listen(3000, function() {
  console.log('Niedicano bot listening on port 3000!');
});