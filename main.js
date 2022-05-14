  Webcam.set({
      width:350,
      height:300,
      image_format : 'png',
      png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
      Webcam.snap(function(data_uri) {
           document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
      });
}

< script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js "></script>

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-MvU6RKq7/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The meaning of this gesture is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}