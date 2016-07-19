import React from 'react';
import Move from './Move';

class WalkScore extends React.Component {
    constructor(props) {
      super(props); 
    }

    componentDidMount() {
      //change address var before addscript from this.props
      this.addScript();
    }
    
    componentWillMount(city, geostate) {
      // address will come from this.props
      ws_lat = this.props.hood_lat;
      ws_lon = this.props.hood_long;
      ws_industry_type = this.props.industry;
    }

    addScript() {
      ++scriptCount
      if (scriptCount === 1) {
        let script = document.createElement('script');
        script.src = 'http://www.walkscore.com/tile/show-walkscore-tile.php';
        script.id = 'map'
        //script.async = true
        document.body.appendChild(script);
      }
    }

    render() {
        return(
            <div id='ws-walkscore-tile'>
            </div>
        )
    }
}

export default WalkScore;
