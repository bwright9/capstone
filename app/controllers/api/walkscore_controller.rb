class Api::WalkscoreController < ApplicationController

	def score
		render json: score_call(current_user.profile.latitude, current_user.profile.longitude)
	end

	def new_score
		render json: score_call(params[:lat], params[:long])
	end

	def get_scores
		coords = params[:coordinates].map { |coord| coord.last }
		walkscores = coords.map { |element| score_call( element["lat"], element["long"] ) }
		render json: walkscores
	end

	private

	def score_call(lat, lng)
		http = Curl.get("http://api.walkscore.com/score?format=xml&lat=#{lat}&lon=#{lng}&wsapikey=#{ENV['WALKSCORE_API_KEY']}")
		Nokogiri::XML(http.body_str).search("walkscore").children.text.to_i
	end

end