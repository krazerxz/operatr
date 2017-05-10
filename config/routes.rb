Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  get "/", to: "home#welcome"

  root "home#welcome"
end
