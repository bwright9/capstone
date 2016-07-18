class Api::VisitController < ApplicationController
	before_action :foursquare_client

	def index
		rex = []
		sorted_rex = {}
		result = @client.explore_venues(:ll => '40.716943,-111.842299', :v => '20130815', :section => 'arts')
		# need to write a loop to get all the names, the 3 here is the index to loop through
		# some_venue = venues.to_hash["groups"].first.to_a[2][1][3]["venue"]["name"].to_json
		venue_names = result.to_hash["groups"].first.to_a[2][1]
		venue_names.each {|x| rex << {x["venue"]["name"] => x["venue"]["rating"]} }
		sorted_rex = rex.inject(:merge).sort_by {|key, value| value}.reverse.to_a
		render json: sorted_rex
	end

	private

	def foursquare_client
		@client = Foursquare2::Client.new(:client_id => ENV['CLIENT_ID'], 
																			:client_secret => ENV['CLIENT_SECRET'])
	end

end
