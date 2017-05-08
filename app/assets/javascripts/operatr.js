navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

$(document).ready(function(){

  var peer = new Peer({key: 'b5q5smtw3dr96bt9', debug: 3});
  var constraints = { audio: true, video: false };

  peer.on('open', function(id){
    $('#pid').text(id);
    $('#status').text("connected");

    navigator.getUserMedia(constraints, function(stream){
      window.localStream = stream;
    }, function(){ console.log("og"); });
  });

  peer.on('call', function(call) {
    call.answer(window.localStream);
    closeExistingCall();
    setNewCall(call);
  });

  function setNewCall(call) {
    window.existingCall = call;
  }

  function closeExistingCall() {
    if (window.existingCall) {
      window.existingCall.close();
    }
  }

  // Make call
  $('#call').click(function() {
    var requestedPeer = $('#rid').val();
    var call = peer.call(requestedPeer, window.localStream);
    closeExistingCall();
    setNewCall(call);
  });


});
