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
		@client = Foursquare2::Client.new(:client_id => 'GYZIEV4BACCGYTWPI1K2DYHO501TPY3NL3L021WQG3NT4DJU', 
																			:client_secret => 'CDBL53KFEPVDAHDRJRSK4L35S1RFVTIZKRRTGVQT4RSJJ0F2')
	end

end
