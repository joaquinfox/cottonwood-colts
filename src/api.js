// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    {
      number: 1,
      name: 'Daquon Quincy',
      position: 'G',
      Overall: '0-6',
      Region: '0-2',
      Attributes: {
        Height: '5\'11"',
        Weight: '168 lbs',
        Grade: 'Senior'
      },
      Plays: ['Basketball', 'Baseball', 'Football']
    },
    {
      number: 7,
      name: 'Jaquon Quincy',
      position: 'SG',
      Overall: '0-6',
      Region: '0-2',
      Attributes: {
        Height: '6\'3"',
        Weight: '180 lbs',
        Grade: 'Senior'
      },
      Plays: ['Basketball', 'Baseball', 'Football']
    },
        {
      number: 22,
      name: 'Kevin Mills',
      position: 'PF',
      Overall: '23-7',
      Region: '7-1',
      Attributes: {
        Height: '6\'1"',
        Weight: '190 lbs',
        Grade: 'Senior'
      },
      Plays: ['Basketball', 'Football']
    },
         {
      number: 22,
      name: 'Cameron Cliatt',
      position: 'G',
      Overall: '23-7',
      Region: '7-1',
      Attributes: {
        Height: '6\'1"',
        Weight: '165 lbs',
        Grade: 'Senior'
      },
      Plays: ['Basketball']
    },
           {
      number: 30,
      name: 'Marquis Holland',
      position: 'PG',
      Overall: '23-7',
      Region: '7-1',
      Attributes: {
        Height: '5\'9"',
        Weight: '150 lbs',
        Grade: 'Senior'
      },
      Plays: ['Basketball']
    },
  ],

  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;
