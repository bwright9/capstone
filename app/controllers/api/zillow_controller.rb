class Api::ZillowController < ApplicationController

	def neighborhoods
		neighborhood_names = []
		neighborhood_count = ""
		http = Curl.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=#{ENV['zillow_api_key']}&state=#{params[:geoState]}&city=#{params[:city]}&childtype=neighborhood")
		names = Nokogiri::XML(http.body_str).search("name")
		names.each do |name|
			neighborhood_names << name.children.first.text
		end
		count = Nokogiri::XML(http.body_str).search("count")
		neighborhood_count = count.children.first.text.to_i
		render json: neighborhood_names
	end

end
