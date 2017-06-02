/**
 * Created by yuriyreva on 30.05.17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import _ from 'lodash';
import GoogleMap from "../components/GoogleMap";


class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    renderWeather(cityData) {
        const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart units="C" data={temps} color="blue"/>
                </td>
                <td>
                    <Chart units="mPa" data={pressure} color="red"/>
                </td>
                <td>
                    <Chart units="%" data={humidity} color="green"/>
                </td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature, (C)</th>
                    <th>Pressure, (hPa)</th>
                    <th>Humidity, (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);