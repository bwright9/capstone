class Api::ZillowController < ApplicationController

	def neighborhoods
		neighborhood_data = {}
		http = Curl.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=#{ENV['zillow_api_key']}&state=#{params[:geoState]}&city=#{params[:city]}&childtype=neighborhood")
		names = Nokogiri::XML(http.body_str).search("name")
		lat = Nokogiri::XML(http.body_str).search("list").search("latitude")
		long = Nokogiri::XML(http.body_str).search("list").search("longitude")
		neighborhood_data[:names] = []
		neighborhood_data[:lat] = []
		neighborhood_data[:long] = []
		# copy = []

		names.each do |name|
			neighborhood_data[:names] << name.children.first.text
			# copy += name.children.first.text
		end

		lat.each do |lat|
			neighborhood_data[:lat] << lat.children.first.text.to_f
		end

		long.each do |long|
			neighborhood_data[:long] << long.children.first.text.to_f
		end

		neighborhood_data[:count] = Nokogiri::XML(http.body_str).search("count").children.first.text.to_i

		# copy = neighborhood_data[:names]
		# arr = []
		# names.length.times do |i|
		# 	arr = neighborhood_data[:names][i] << ", " << neighborhood_data[:lat][i].to_s << ", " << neighborhood_data[:long][i].to_s
		# end

		render json: neighborhood_data
	end
end


# {
# 	neighborhoods: [ {hood:{name: 'some name', lat: 12.31, long: 32.12}},{hood: {name: 'another', lat: 123, long: 321} ],
# 	count: 107
# }