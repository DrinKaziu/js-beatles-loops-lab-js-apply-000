const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    arr.push(musician + ' ' + 'plays ' + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts(fact) {
  var factsArr = [];
}