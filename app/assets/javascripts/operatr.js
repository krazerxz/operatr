$(document).ready(function(){
  var audioContext = new AudioContext();

  var peer = new Peer();
  var peer2 = new Peer();
  var constraints = { audio: true, video: false };

  navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {

    peer.on('call', function(call) {
      call.answer(mediaStream);
    });

    peer.on('open', function(id){
      var outgoing_call = peer2.call(id, mediaStream);
    });

  });
});
