class Api::MoveController < ApplicationController

	def maps_key
		render json: {maps_key: ENV['GOOGLEMAPS_API_KEY']}
	end

  def walkscore_map
    render json: {mapHTML: "<script type='text/javascript'>var ws_wsid = '050485d93b8f484c94a5db141093f5f0';var ws_address = '1060 Lombard Street, San Francisco, CA';var ws_width = '600';var ws_height = '444';var ws_layout = 'horizontal';var ws_commute = 'true';var ws_transit_score = 'true';var ws_map_modules = 'all';</script><style type='text/css'>#ws-walkscore-tile{position:relative;text-align:left}#ws-walkscore-tile *{float:none;}#ws-foottext, #ws-footer a,#ws-footer a:link{font:11px/14px Verdana,Arial,Helvetica,sans-serif;margin-right:6px;white-space:nowrap;padding:0;color:#000;font-weight:bold;text-decoration:none}#ws-footer a:hover{color:#000;text-decoration:none}#ws-footer a:active{color:#b14900}</style><div id='ws-walkscore-tile'><div id='ws-footer' style='position:absolute;top:426px;left:8px;width:588px'><form id='ws-form'><span id='ws-foottext' style='float: left;'>Score <a id='ws-a' href='https://www.redfin.com/how-walk-score-works' target='_blank'>Your Home</a>: </span><input type='text' id='ws-street' style='position:absolute;top:0px;left:170px;width:386px' /><input type='image' id='ws-go' src='//cdn2.walk.sc/2/images/tile/go-btn.gif' height='15' width='26' border='0' alt='get my Walk Score' style='position:absolute;top:0px;right:0px' /></form></div></div><script type='text/javascript' src='http://www.walkscore.com/tile/show-walkscore-tile.php'></script>"}
  end

  def city_schrate
		agent = Mechanize.new

  	state = 'utah'
		city = 'salt_lake_city'

		page = agent.get("http://www.bestplaces.net/schools/#{state}/#{city}")
		count = 0
		numbers = 0
		page.search('#mainContent_dgSchool tr').each_with_index do |school_row, index|
			next if index == 0
			school_values = school_row.search('td')
			school_rating = school_values.last.text.gsub(/\A\p{Space}*/, '')
			next if school_rating == ''
			numbers += school_rating.to_f
			count += 1
		end
		average = numbers/count
		render json: average.round(2)
 	end

 	def city_crimerate
 		agent = Mechanize.new

 		state = params[:state]
		city = params[:city]
		binding.pry
		page =  agent.get("http://www.bestplaces.net/crime/city/#{state}/#{city}")
		crimerate = []
		@table = []
		page.search('#mainContent_dgCrime tr').each_with_index do |cr_row, index|

			next if index == 0

			crime_values = cr_row.search('td')
			violent_crime = crime_values[1].text.gsub(/\A\p{Space}*/, '')
			@table.push(violent_crime)

			crimerate << violent_crime
			break;
			break;
		end
		render json: crimerate
	end

	def compare_cities 
		agent = Mechanize.new
		compare = []

		city_1 = params[:city1]
		city_2 = params[:city2]
		state_1 = params[:state1]
		state_2 =params[:state2]


		#POPULATION
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/people")
		page.search('#mainContent_divMenu table tr').each do |people_para1|

			table = people_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text
			para3 = para[2].text

			compare << para1
			compare << para2
			compare << para3
			break;
		end

		#COST OF LIVING
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/costofliving")

		page.search('#mainContent_divMenu table tr').each do |col_para1|

			table = col_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text
			para3 = para[2].text

			compare << para1
			compare << para2
			compare << para3
			break;
		end

		#ECONOMY
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/economy")

		page.search('#mainContent_divMenu table tr').each do |economy_para1|

			table = economy_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text

			compare << para1
			break;
		end

		#HOUSING
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/housing")

		page.search('#mainContent_divMenu table tr').each do |housing_para1|

			table = housing_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text

			compare << para1
			compare << para2
			break;
		end

		#EDUCATION
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/education")

		page.search('#mainContent_divMenu table tr').each do |education_para1|

			table = education_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text
			para3 = para[2].text

			compare << para1
			compare << para2
			compare << para3
			break;
		end

		#TRANSPORTATION
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/transportation")

		page.search('#mainContent_divMenu table tr').each do |transportation_para1|

			table = transportation_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text

			compare << para1
			compare << para2
			break;
		end

		#CLIMATE
		page = agent.get("http://www.bestplaces.net/compare-cities/#{city_1}_#{state_1}/#{city_2}_#{state_2}/climate")

		page.search('#mainContent_divMenu table tr').each do |climate_para1|

			table = climate_para1.search('td')
			rowat1 = table[1]
			para = rowat1.search('p')
			para1 = para.first.text
			para2 = para[1].text

			compare << para1
			compare << para2
			break;
		end
		render json: compare
	end

	def compare_salary
	#COST OF LIVING (SALARY) COMPARISON:
		agent = Mechanize.new

		salcompare = []

		city_1 = params[:city1]
		city_2 = params[:city2]
		state_1 = params[:state1]
		state_2 =params[:state2]
		salary = '50000'

		page = agent.get("http://www.bestplaces.net/cost-of-living/#{city_1}_#{state_1}/#{city_2}_#{state_2}/#{salary}")
		
		# how the salary compares in each city
		salary_compare_text = page.at('#mainContent_tagline').text
		salcompare << salary_compare_text
		# get all the info about which city is cheaper
		page.at('#colhfacts table tr').search('td').each do |row|
		salcompare << row.text
		end
		render json: salcompare
	end
end