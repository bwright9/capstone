Rails.application.routes.draw do
  root 'home#index'

  

  devise_for :users

  get '*unmatched_route', to: 'home#index'

end
