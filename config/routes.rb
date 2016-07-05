Rails.application.routes.draw do
  root 'home#index'

	namespace :api do 
		get "neighborhoods", to: "zillow#neighborhoods"
	end  

  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }

  # keep this at the very bottom
  get '*unmatched_route', to: 'home#index'
end
