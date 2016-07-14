class Api::WalkscoreController < ApplicationController

	def score
		http = Curl.get("http://api.walkscore.com/score?format=xml&lat=#{current_user.profile.latitude}&lon=#{current_user.profile.longitude}&wsapikey=#{ENV['WALKSCORE_API_KEY']}")
		walk_score = Nokogiri::XML(http.body_str).search("walkscore").children.text.to_i
		render json: walk_score
	end

	def new_score
		http = Curl.get("http://api.walkscore.com/score?format=xml&lat=#{params[:lat]}&lon=#{params[:long]}&wsapikey=#{ENV['WALKSCORE_API_KEY']}")
		new_walk_score = Nokogiri::XML(http.body_str).search("walkscore").children.text.to_i
		render json: new_walk_score
	end


end