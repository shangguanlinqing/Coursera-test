(function(){
  names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var eachName in names){
    var firstCharacterInEachName = names[eachName].charAt(0).toLowerCase();
    var nameString = names[eachName];
    //console.log("name is is: "+nameString);
    //console.log("first chart is: "+firstCharacterInEachName);
    if(firstCharacterInEachName === 'j'){
      byeSpeaker.speak(nameString);
    }else{
      helloSpeaker.speak(nameString);
    }
  }

})();
