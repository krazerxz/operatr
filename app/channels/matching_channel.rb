class MatchingChannel < ApplicationCable::Channel
  AWAITING = "awaiting"
  IN_CALL = "in_call"

  def subscribed
    puts ">>>>> client subscribed"
  end

  def unsubscribed data
    puts ">>>>> client unsubscribed"
  end

  def peer_id data
    id = data['pid']
    puts ">>>>> Client ID: #{id}"
    #UserPool.new.add pool: AWAITING, id: id
  end
end
