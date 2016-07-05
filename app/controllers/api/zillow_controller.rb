class Api::ZillowController < ApplicationController

	def neighborhoods
		neighborhood_names = []
		http = Curl.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=#{ENV['zillow_api_key']}&state=WA&city=Seattle&childtype=neighborhood")
		names = Nokogiri::XML(http.body_str).search("name")
		names.each do |name|
			neighborhood_names << name.children.first.text
		end
		render json: neighborhood_names
	end

end
