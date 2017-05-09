class MatchingChannel < ApplicationCable::Channel
  # awaiting
  # in-call

  def subscribed
    puts ">>>>> client subscribed"
  end

  def unsubscribed
    # Remove user ID from awaiting
    puts ">>>>> client unsubscribed"
  end

  def peer_id data
    peer_id = data['pid']
    puts ">>>>> Client ID: #{peer_id}"
    # Add IT to awaiting
  end
end
