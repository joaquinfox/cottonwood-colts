This project is inspired by Paul Sherman's excellent tutorial 'A Simple React Router v4 Tutorial', published on his blog at https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/

- This app uses an API object, with an array of player objects in the form
  const PlayerAPI = {
  players:[
  {name: 'player 1',
  otherStuff: 'etc'
  },
  {name: 'player 2',
  otherStuff: 'etc'
  }
  ],
  all: function(){
  return this.players
  }
  get: function(id){
  const isPlayer = p => p.number === id;
  return this.players.find(isPlayer);
  }
  }
- The all: and get: methods defined at the bottom of PlayerAPI are pretty cool. This is new syntax to me. The all: method is called when the fullroster component is rendered. fullroster then maps over the objects in the api and returns them, wrapped in html.

Coul the map function be carried out in the api? Our back end stand in? Probably. I'll try that...no luck with that. Anyways...

- The file hierarchy looks like this

- Index

  - App
    - Header
    - Main
      - Home
      - Schedule
      - Roster
        - Fullroster
        - Player

- BrowserRouter is applied at the App level. Routes are defined in Main and again in Roster.The Main links are defined in the header and the Roster links are defined in the child components (fullroster and player)

- The player component does several interesting things. It uses 'path params'. From the tutorial : 'Sometimes there are variables within a pathname we want to capture. We can do this by adding path params. The :number part of /roster/:number is a path param. The :number will be captured and stored as match.params.number.'

The player component uses PlayerAPI.get(parseInt(props.match.params.number, 10)); to get the player number from the api data, match it to the path param and parse it (since the number is stored as a string, not a number).

- The fullroster component makes a (fake) api call, and maps over the results and embeds a link into a list item for each player. The link is to the player component, and the path used by the link is defined in the Route, in roster.

So the route defines the link, and the route has to be defined as an ancestor somewhere to whatever child component links to that route.

Those are the more interesting features. I guess a good next step would be to link this to an actual server and mount a database. But I want to keep my focus on the front end for a bit. So replicate this project, with variations here and there, to get it solid.