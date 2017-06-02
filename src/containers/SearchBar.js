/**
 * Created by yuriyreva on 30.05.17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange(e) {
        this.setState({term: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Get forecast for 5 days"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps,)(SearchBar);