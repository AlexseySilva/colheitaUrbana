var video =document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
    video.srcObject=stream;
    video.play();
}).catch()