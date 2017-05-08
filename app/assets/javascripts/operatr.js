$(document).ready(function(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  var audioContext = new AudioContext();

  var peer = new Peer();
  var peer2 = new Peer();
  var constraints = { audio: true, video: false };

  var mediaStream = navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {

    peer.on('call', function(call) {
      call.answer(mediaStream);
    });

    peer.on('open', function(id){
      var outgoing_call = peer2.call(id, mediaStream);
    });

    function error(err) {
      window.alert("Use a better browser");
    }
  });

});
