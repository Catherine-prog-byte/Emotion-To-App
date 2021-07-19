prediction_1="";
prediction_2="";
Webcam.set({
    width : 350,
    height : 350,
    image_format : 'png',
   png_quality : 90  
 });
 camera=document.getElementById("camera");
 Webcam.attach('#camera');
 function takeSnapshot(){
     Webcam.snap(function (data_uri)
     {
         document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri+"'/>";
      });
    speak();
 }
 console.log("ml5 version:", ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2I8BXL_SR/model.json',modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction Is "+prediction_1;
    speak_data_2="And The Second Prediction Is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}