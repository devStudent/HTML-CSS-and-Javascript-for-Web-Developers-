var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var letra;
for (var i=0; i < names.length; i++) {  
  letra=names[i].charAt(0).toLowerCase();  
  console.log(letra);
  if (letra==='j') {
    speakGoodBye.speak(names[i]);
  } else {
    speakHello.speak(names[i]); 
  }
}