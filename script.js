var nounArr = document.getElementsByClassName ('noun');

for (var i = 0; i < nounArr.length; i++) {
var noun = ['introduction', 'mall', 'candidate', 'candidate', 'song', 'courage', 'profession', 'preparation', 'farmer', 'bedroom'];

var random = Math.floor(Math.random() * noun.length);
  nounArr[i].textContent = noun[random];
}




var adjectiveArr = document.getElementsByClassName ('adjective');

for (var i = 0; i < adjectiveArr.length; i++) {
var adjective = ['several', 'economic', 'jobless', 'open', 'gabby', 'naive', 'labored', 'smiling', 'farmer', 'irate'];

var random = Math.floor(Math.random() * adjective.length);
  adjectiveArr[i].textContent = adjective[random];
}




var verbArr = document.getElementsByClassName ('verb');

for (var i = 0; i < verbArr.length; i++) {
var verb = ['spoil', 'stick', 'jobless', 'drive', 'call', 'recognize', 'claim', 'research', 'tremble', 'smash'];

var random = Math.floor(Math.random() * verb.length);
  verbArr[i].textContent = verb[random];
}




var adverbArr = document.getElementsByClassName ('adverb');

for (var i = 0; i < adverbArr.length; i++) {
var adverb = ['fogy', 'winding', 'unideaed', 'sorrel', 'cachet', 'box-iron', 'unpoised', 'suspend', 'conimene', 'hep'];

var random = Math.floor(Math.random() * adverb.length);
  adverbArr[i].textContent = adverb[random];
}




var pluralNounArr = document.getElementsByClassName ('plural-noun');

for (var i = 0; i < pluralNounArr.length; i++) {
var pluralNoun = ['albinos', 'burritos', 'casinos', 'espressos', 'gelatos', 'igloos', 'infernos', 'kilos', 'memos', 'tattoos'];

var random = Math.floor(Math.random() * pluralNoun.length);
  pluralNounArr[i].textContent = pluralNoun[random];
}




var bodyPartArr = document.getElementsByClassName ('body-part');

for (var i = 0; i < bodyPartArr.length; i++) {
var bodyPart = ['jaw', 'heel', 'palm', 'thumb', 'eyelid', 'toenail', 'index finger', 'big toe', 'back', 'underarm'];

var random = Math.floor(Math.random() * bodyPart.length);
  bodyPartArr[i].textContent = bodyPart[random];
}
