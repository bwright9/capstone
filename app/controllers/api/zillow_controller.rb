class Api::ZillowController < ApplicationController

	def neighborhoods
		neighborhood_data = {}
		result = {}
		http = Curl.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=#{ENV['zillow_api_key']}&state=#{params[:geoState]}&city=#{params[:city]}&childtype=neighborhood")
		names = Nokogiri::XML(http.body_str).search("name")
		lat = Nokogiri::XML(http.body_str).search("list").search("latitude")
		long = Nokogiri::XML(http.body_str).search("list").search("longitude")
		# copy = []

		names.each_with_index do |name, i|
			neighborhood_data[name.children.first.text] = {lat: lat[i].children.first.text.to_f, long: long[i].children.first.text.to_f}
		end

		neighborhood_data.keys.each_with_index { |hood, i| neighborhood_data.values[i][:score] = score_call(neighborhood_data[hood][:lat], neighborhood_data[hood][:long]) }
		sorted = neighborhood_data.sort_by { |name, data| data[:score] }

		sorted.each { |hood| result[hood.first] = hood.last }

		render json: result
	end

	private

	def score_call(lat, lng)
		http = Curl.get("http://api.walkscore.com/score?format=xml&lat=#{lat}&lon=#{lng}&wsapikey=#{ENV['WALKSCORE_API_KEY']}")
		Nokogiri::XML(http.body_str).search("walkscore").children.text.to_i
	end
end


# {
# 	neighborhoods: [ {hood:{name: 'some name', lat: 12.31, long: 32.12}},{hood: {name: 'another', lat: 123, long: 321} ],
# 	count: 107
# }