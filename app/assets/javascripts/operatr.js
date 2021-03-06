$(document).ready(function(){

  var peer = new Peer({
    port: 443,
    host: 'peerjs.chrispomfret.com',
    key: 'p33rjs',
    debug: 3,
    config: { 'iceServers': [
      { url: 'stun:stun.l.google.com:19302' }
    ]}
  });

  var constraints = { audio: true, video: false };

  navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
    window.localStream = stream;
  });

  peer.on('open', function(id){
    App.matching.send_peer_id(id)
    $('#pid').text(id);
    $('#status').text("connected");
  });

  peer.on('call', function(call) {
    call.answer(window.localStream);
    closeExistingCall();
    setNewCall(call);
  });

  function setNewCall(call) {
    call.on('stream', function(stream) {
      console.log('streamRecieved', stream);
      $('#audio')[0].src = (URL || webkitURL || mozURL).createObjectURL(stream);

    });
    window.existingCall = call;
    $('#status').text("in-call");
  }

  function closeExistingCall() {
    if (window.existingCall) {
      window.existingCall.close();
    }
  }

  $('#call').click(function() {
    var requestedPeer = $('#rid').val();
    var call = peer.call(requestedPeer, window.localStream);
    closeExistingCall();
    setNewCall(call);
  });

});
