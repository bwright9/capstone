class Api::ZillowController < ApplicationController

	def neighborhoods
		neighborhood_data = {}
		http = Curl.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=#{ENV['zillow_api_key']}&state=#{params[:geoState]}&city=#{params[:city]}&childtype=neighborhood")
		names = Nokogiri::XML(http.body_str).search("name")
		neighborhood_data[:names] = []
		names.each do |name|
			neighborhood_data[:names] << name.children.first.text
		end
		neighborhood_data[:count] = Nokogiri::XML(http.body_str).search("count").children.first.text.to_i
		render json: neighborhood_data
	end

end


# {
# 	neighborhoods: [ {name: 'some name', lat: 12.31, long: 32.12}, {name: 'another', lat: 123, long: 321}],
# 	count: 107
# }
