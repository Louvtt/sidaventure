
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
  var x = xMousePos - object.offsetLeft;
  var y = yMousePos - object.offsetTop;
  alert("x=" + x + " y=" + y);
}

object.onclick = update;

object.onmousemove = function(){
  var x = xMousePos - object.offsetLeft;
  var y = yMousePos - object.offsetTop;
  cursor1: url('...') x y, url('...') x y, défaut;// importer l'image d'une klé
  object.style.cursor1='key'
  if(x > object.offsetWidth - 4)
    object.style.cursor='e-resize';
  if(y > object.offsetHeight - 4)
    object.style.cursor='n-resize';
  //document.getElementById("message").innerHTML = "Pos x = " + x + "/" + 
  // object.offsetWidth +  " y = " + y + 
  //"/" +object.offsetHeight;
 }
</script>  
