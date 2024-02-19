

function startClassification()
{
  navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4Z7hhGOBL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult)
   }
   
   function gotResult(error, results) {
     if (error) {
       console.error(error);
     }
     else{
       console.log(results);
       red = Math.floor(Math.random()*255)+1;
       green = Math.floor(Math.random()*255)+1;
       blue = Math.floor(Math.random()*255)+1;
   
       document.getElementById("result_label").innerHTML="Som de um - " +results[0].label;
       document.getElementById("result_label").style.color="rgb("+red+","+green+","+blue+")";
       document.getElementById("result_confidence").innerHTML="Precisão - " +results[0].confidence;
       document.getElementById("result_confidence").style.color="rgb("+red+","+green+","+blue+")";
        

       img=document.getElementById("ouvir1");

       if (results[0].label=="Cachorro") {
        img.src="./imagem/smiling-dog-.gif";
       }
       else if (results[0].label=="Gato") {
        img.src="./imagem/cat.gif";
       }
       else if (results[0].label=="Porco") {
        img.src="./imagem/porco.gif";
       }
       else {
        img.src="./imagem/ouvir.png";
       }
     }
    }