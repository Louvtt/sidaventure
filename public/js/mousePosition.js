
<script>
var object = document.getElementById("object");

var xMousePos = 0;
var yMousePos = 0;
document.onmousemove = function(e)
{
  xMousePos = e.clientX + window.pageXOffset;
  yMousePos = e.clientY + window.pageYOffset;
};

function update(e)
{
if (klé== false){
    alert("il faut la clé pour ouvrir);
}
if(klé== true )
    //action pour la porte 
    alert("la porte est ouverte")
}

object.onclick = update;

object.onmousemove = function(){
  var x = xMousePos - object.offsetLeft;
  var y = yMousePos - object.offsetTop;
  cursor1: url('...') x y, url('...') x y, défaut;// importer l'image d'une klé
  object.style.cursor='wait'
  if(x > object.offsetWidth - 4)//position et cursor a modifier en fonction de la position
    object.style.cursor='e-resize';
  if(y > object.offsetHeight - 4)//position et cursor a modifier en fonction de la position
    object.style.cursor='n-resize';

 }
</script>  
