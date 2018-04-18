var createNewPolitician = function(name)
{

  var politician = {};
  politician.name= name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.color = null;

  politician.announceName = function()
    {
      console.log("One candidate's name is " + this.name);
    };
  politician.announceName();

  politician.tallyUpTotalVotes = function()
    {
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };

  return politician;
};

var Goody = createNewPolitician("Goody Twoshoes");
var Kathy = createNewPolitician("Chatty Kathy");

Goody.electionResults = [5, 1, 7, 2, 33, 6, 4,  2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
Kathy.electionResults = [ 4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

Goody.electionResults[9] = 1;
Kathy.electionResults[9] = 28;
Goody.electionResults[4] = 17;
Kathy.electionResults[4] = 38;
Goody.electionResults[43] = 11;
Kathy.electionResults[43] = 27;
console.log(Goody.electionResults);
console.log(Kathy.electionResults);


Goody.tallyUpTotalVotes();
Kathy.tallyUpTotalVotes();
console.log(Goody.totalVotes);
console.log(Kathy.totalVotes);

var winner;

  if (Goody.totalVotes == Kathy.totalVotes)
  { winner = "Tie";
    console.log("There is a tie");
  }
  else if (Goody.totalVotes < Kathy.totalVotes)
  { winner = "Chatty Kathy";
    console.log("The winner is Kathy");
  }
  else
  { winner = "Goody Twoshoes";
    console.log("The winner is Goody");
  }


Goody.color = [132, 17, 11];
Kathy.color = [245, 141, 136];


console.log("Goody's color is: " + Goody.color);

console.log("Kathy's color is: " + Kathy.color);

var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (Goody.electionResults[state]>Kathy.electionResults[state])
  {
   theStates[state].winner = Goody;
  }
  else if (Kathy.electionResults[state]>Goody.electionResults[state])
  {
     theStates[state].winner = Kathy;
  }
  else
  {
    theStates[state].winner = null;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  { theStates[state].rgbColor = stateWinner.color;
  }
  else
  {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0].children[0];

  var stateName = header.children[0];

  stateName.innerText = theStates[state].nameFull;

  var stateAbbr = header.children[1];

  stateAbbr.innerText = theStates[state].nameAbbrev;

  var row1 = stateInfoTable.children[1].children[0];

   row1.children[0].innerText = "Goody Twoshoes";

  row1.children[1].innerText = Goody.electionResults[state];

    var row2 = stateInfoTable.children[1].children[1];

   row2.children[0].innerText = "Chatty Kathy";

  row2.children[1].innerText = Kathy.electionResults[state];

  var row3 = stateInfoTable.children[1].children[2];


    if (Goody.electionResults[state]>Kathy.electionResults[state])
    {
     winner = "Goody Twoshoes";
     }
    else if (Kathy.electionResults[state]>Goody.electionResults[state])
    {
     winner = "Chatty Kathy";
    }
    else
    {
     winner = "Tie";
    }

  row3.children[1].innerText = winner;

};

var table = document.getElementById('countryResults');

table.children[0].children[0].children[0].innerText = "Goody Twoshoes";
table.children[0].children[0].children[1].innerText = Goody.totalVotes;
table.children[0].children[0].children[2].innerText = "Chatty Kathy";
table.children[0].children[0].children[3].innerText = Kathy.totalVotes;
table.children[0].children[0].children[5].innerText = winner;
