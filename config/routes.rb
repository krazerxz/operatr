Rails.application.routes.draw do
  get "/", to: "home#welcome"

  root "home#welcome"
end
