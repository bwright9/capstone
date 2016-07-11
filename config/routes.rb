Rails.application.routes.draw do
  root 'home#index'

	namespace :api do 
		get "neighborhoods", to: "zillow#neighborhoods"
		get 'maps_key', to: 'move#maps_key'
    get 'walkscore_map', to: 'move#walkscore_map'
		resources :profiles
  	resources :move
	end  

  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }

  # keep this at the very bottom
  get '*unmatched_route', to: 'home#index'
end
