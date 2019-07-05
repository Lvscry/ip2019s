/*

*/



function start(e){
    var name = [
    {
         char: '洪',
         big5: 'AC78',
         cns:  '1-517B',
         unicode:  '6D2A'
    },
    {
         char: '瑋',
         big5: 'DEB3',
         cns:  '2-4477',
         unicode:  '744B'
    }
];

var ele = document.getElementById('div1');
for(var i = 0; i < 3; i++){
    ele.innerHTML += name[i].char;
    ele.innerHTML += ' big5 = ';
    ele.innerHTML += name[i].big5;
    ele.innerHTML += ' cns = ';
    ele.innerHTML += name[i].cns;
    ele.innerHTML += ' unicode = ';
    ele.innerHTML += name[i].unicode;
    ele.innerHTML += '<br>';
  }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
