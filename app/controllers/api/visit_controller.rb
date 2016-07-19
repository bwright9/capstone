class Api::VisitController < ApplicationController
	before_action :foursquare_client, :prefs

	def index
		# result = @client.explore_venues(:ll => '40.716943,-111.842299', :v => '20130815', :section => 'arts')
		rex = []
		valid_rex = {}
		sorted_rex = {}
		lat = "#{params[:lat]}".to_f
		long = "#{params[:long]}".to_f
		coords = "#{lat},#{long}"
		
		@prefs.each do |x|
			rex = []
			result = @client.explore_venues(:ll => coords, :v => '20130815', :section => x)	
			venue_names = result.to_hash["groups"].first.to_a[2][1]
			venue_names.each {|x| rex << {x["venue"]["name"] => x["venue"]["rating"]} }
			valid_rex = rex.inject(:merge).compact
			sorted_rex[x] = valid_rex.sort_by {|key, value| value}.reverse.to_a.first(3)
		end
			
		render json: sorted_rex
	end

	private

	def foursquare_client
		@client = Foursquare2::Client.new(:client_id => ENV['CLIENT_ID'], 
																			:client_secret => ENV['CLIENT_SECRET'])
	end

	def prefs
		@prefs = params[:filtered][4..(params[:filtered].length-1)]		
	end

end
