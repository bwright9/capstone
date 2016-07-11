class Api::MoveController < ApplicationController

	def maps_key
		render json: {maps_key: ENV['GOOGLEMAPS_API_KEY']}
	end

  def walkscore_map
    render json: {mapHTML: "<script type='text/javascript'>var ws_wsid = '050485d93b8f484c94a5db141093f5f0';var ws_address = '1060 Lombard Street, San Francisco, CA';var ws_width = '600';var ws_height = '444';var ws_layout = 'horizontal';var ws_commute = 'true';var ws_transit_score = 'true';var ws_map_modules = 'all';</script><style type='text/css'>#ws-walkscore-tile{position:relative;text-align:left}#ws-walkscore-tile *{float:none;}#ws-foottext, #ws-footer a,#ws-footer a:link{font:11px/14px Verdana,Arial,Helvetica,sans-serif;margin-right:6px;white-space:nowrap;padding:0;color:#000;font-weight:bold;text-decoration:none}#ws-footer a:hover{color:#000;text-decoration:none}#ws-footer a:active{color:#b14900}</style><div id='ws-walkscore-tile'><div id='ws-footer' style='position:absolute;top:426px;left:8px;width:588px'><form id='ws-form'><span id='ws-foottext' style='float: left;'>Score <a id='ws-a' href='https://www.redfin.com/how-walk-score-works' target='_blank'>Your Home</a>: </span><input type='text' id='ws-street' style='position:absolute;top:0px;left:170px;width:386px' /><input type='image' id='ws-go' src='//cdn2.walk.sc/2/images/tile/go-btn.gif' height='15' width='26' border='0' alt='get my Walk Score' style='position:absolute;top:0px;right:0px' /></form></div></div><script type='text/javascript' src='http://www.walkscore.com/tile/show-walkscore-tile.php'></script>"}
  end

end