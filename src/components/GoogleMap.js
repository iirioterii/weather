/**
 * Created by yuriyreva on 30.05.17.
 */
import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return(
            <div ref="map"></div>
        )
    }
}

export default GoogleMap;