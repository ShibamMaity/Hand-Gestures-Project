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

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        gesture = results[0].label;
        speak();
        if(results[0].label == "amazing")
        {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if(results[0].label == "best")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The meaning of this gesture is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}