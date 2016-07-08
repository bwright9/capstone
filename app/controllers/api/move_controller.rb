class Api::MoveController < ApplicationController

	def maps_key
		render json: {maps_key: ENV['GOOGLEMAPS_API_KEY']}
	end

end