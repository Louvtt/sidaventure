
var object = document.getElementById("object");

const mousePos = {
  current: {x: 0, y: 0},
  last: []
};

var posklex=10;
var poskley=10;
document.onmousemove = calculateMouseDelta;

function calculateMouseDelta(e) {
  mousePos.last.push({ ...mousePos.current} );
  if(mousePos.last.length > 10) {
    for (let index = 0; index < Math.max(0, mousePos.last.length-10); index++) {
      mousePos.last.shift();      
    }
  }

  let moyDeltaX = 0;
  let moyDeltaY = 0;
  for (let i = 1; i < mousePos.last.length; i++) {
    const pos1 = mousePos.last[i];
    const pos2 = mousePos.last[i-1];
    const deltaX = pos1.x - pos2.x;
    const deltaY = pos1.y - pos2.y;
    moyDeltaX += deltaX;
    moyDeltaY += deltaY;
  }
  moyDeltaX /= mousePos.last.length;
  moyDeltaY /= mousePos.last.length;

  mousePos.current.x = e.clientX;
  mousePos.current.y = e.clientY;

  // calculate delta
  const deltaX = moyDeltaX;
  const deltaY = moyDeltaY;

  if(deltaX > deltaY) {
    console.log("h");
  } else if(deltaX < deltaY) {
    console.log("v");
  } else {
    console.log("static");
  }
}

function testKey(e)
{
  if (!klé)
    alert("il faut la clé pour ouvrir");
  //action pour la porte 
  if(klé)
      alert("la porte est ouverte")
}

object.onclick = testKey;

// object.onmousemove = function(){
//   var x = xMousePos - object.offsetLeft;
//   var y = yMousePos - object.offsetTop;
//   //cursor1: url('...'), défaut;// importer l'image d'une klé
//   object.style.cursor='wait'
//   if(x > object.offsetWidth - 4)//position et cursor a modifier en fonction de la position
//     object.style.cursor='e-resize';
//   if(y > object.offsetHeight - 4)//position et cursor a modifier en fonction de la position
//     object.style.cursor='n-resize';
// if (x==posklex && y==poskley)
//     object.style.cursor=cursor1

//  }
