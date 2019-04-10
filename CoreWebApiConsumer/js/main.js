//start up server http-server  [path]\corewebapiconsumer

var url = 'https://localhost:5001/api/animals';
//var url = 'https://localhost:5001/api/animals/2';
//var animals;
var app = document.getElementById('app');
fetch(url, {
   method: 'GET'
}).then((response) => {
   response.json().then((j) => {
      //console.log(j[0].name)
      var animals = j;
      appStart(j);
   });
}).catch((err) => {
   console.log(err);
})

function appStart(data){
    var soundTarget = document.createElement('div');
    soundTarget.style.padding = "10px";

    var soundTargetTitle = document.createElement('span');
    soundTargetTitle.innerHTML = "Sound: ";
    var soundTargetProperty = document.createElement('span');
    soundTarget.appendChild(soundTargetTitle);
    soundTarget.appendChild(soundTargetProperty)

   

    data.map((item, idx) => {
        var divName = document.createElement('div');
        divName.setAttribute("style", "margin: 5px; padding: 5px; background: grey; color: white; width: 200px; border-radius: 10px");
        divName.innerHTML = `${item.name} is a ${item.type} - click me`;

        divName.addEventListener("click", () => {
            soundTargetProperty.innerHTML = item.sound;
        })
        //typerwriterAnim(divName, `My name is ${item.name} and I am a ${item.type} and I go ${item.sound}`);
        //divName.innerHTML = `My name is <strong>${item.name}</strong> and I am a <strong>${item.type}</strong> and I go <em>${item.sound}</em>`;
        app.appendChild(divName);
    })

    app.appendChild(soundTarget);
}


function typerwriterAnim(copy, copystring, offset)
{
    copy.innerHTML = '';
    for (var i = 0; i < copystring.length; i++) {
        addChar(copystring.charAt(i), (i + 1) * 100, copy)
      }
}
function addChar(char, timeout, copy){
    //interpret # as a command to insert <br> tag
    if(char === "#"){
        char = '<br>'
    }
    setTimeout(() => {
        copy.innerHTML += char
    }, timeout); 
}