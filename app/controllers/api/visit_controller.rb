class Api::VisitController < ApplicationController
	before_action :foursquare_client

	def index
		names = []
		venues = @client.explore_venues(:ll => '40.716943,-111.842299', :v => '20130815', :section => 'arts')
		# need to write a loop to get all the names, the 3 here is the index to loop through
		some_venue = venues.to_hash["groups"].first.to_a[2][1][3]["venue"]["name"].to_json
		render json: some_venue
	end

	private

	def foursquare_client
		@client = Foursquare2::Client.new(:client_id => ENV['CLIENT_ID'], 
																			:client_secret => ENV['CLIENT_SECRET'])
	end

end
