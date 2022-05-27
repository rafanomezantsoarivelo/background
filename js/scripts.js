var url = window.location.href;
console.log(url);

setInterval(myTimer, 2000);

function myTimer() {
  var d = new Date();
  const insert = document.querySelector('ul');
  var textes = "Bonjour  Tous le monde !!";

  for (var i = 0; i < 1; i++) {

    var listes = document.createElement('li');
    var texte = document.createTextNode(textes);

    listes.id = 'liste' + i;
    listes.appendChild(texte);
    insert.appendChild(listes);
  }
}
function hiddenn(){
  var x = document.getElementById("pass");
  var y = document.getElementById("mipoitra");
  var z = document.getElementById("tsymipoitra");
  if(x.type === "password" )
  {
    x.type = "text";
    y.style.display = "inline-block";
    z.style.display = "none";
  }else{
  }
}

function viewew(){
var x = document.getElementById("pass");
  var y = document.getElementById("mipoitra");
  var z = document.getElementById("tsymipoitra");
  if(x.type === "text" )
  {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "inline-block";
  }else{
  }

}






