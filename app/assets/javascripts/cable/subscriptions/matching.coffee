App.matching = App.cable.subscriptions.create { channel: "MatchingChannel", room: "primary" },
  connected: ->
    console.log("connected")
  disconnected: ->
    console.log("disconnected")
  send_peer_id: (id) ->
    @perform 'peer_id', pid: id
