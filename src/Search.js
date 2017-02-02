import React, {Component} from 'react';
import SearchApi from './searchApi';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TakeOffIcon from 'material-ui/svg-icons/action/flight-takeoff';
import LandIcon from 'material-ui/svg-icons/action/flight-land';
import moment from 'moment';

let DateTimeFormat = global.Intl.DateTimeFormat;

const dataSourceConfig = {
    text: 'text',
    value: 'value',
};

const dateFormat = 'YYYY-MM-DD';

class Search extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

            originAirports: [],
            destinationAirports: [],

            departureDate: null,
            returnDate: null,
            slice1: {
                origin: '',
                destination: '',
                date: null
            },
            slice2: {
                origin: '',
                destination: '',
                date: null
            },
            passengers: {
                adultCount: null
            },
            solutions: null,
            refundable: false
        };
    }

    componentWillMount() {


    }

    handleDepartureDateChange(e, date) {
        this.setState({
            departureDate: moment(date).format(dateFormat)
        });
    }

    handleReturnDateChange(e, date) {
        this.setState({
            returnDate: moment(date).format(dateFormat)
        });
    }

    handleOriginChange(searchString, dataSource) {
        let self = this;
        SearchApi.getAirports(searchString).then(function (response) {
            if (response.airports) {
                let tempAirports = [];
                response.airports.map(function (airport) {
                    tempAirports.push({
                        text: airport.code + '-' + airport.name + ', ' + airport.country_name,
                        value: airport.code
                    });
                });
                self.setState({originAirports: tempAirports});
            }
        });
    }

    handleSetOrigin(chosen) {
        this.setState({
            origin: chosen.value
        });
    }

    handleDestinationChange(searchString, dataSource) {
        let self = this;
        SearchApi.getAirports(searchString).then(function (response) {
            if (response.airports) {
                let tempAirports = [];
                response.airports.map(function (airport) {
                    tempAirports.push({
                        text: airport.code + '-' + airport.name + ', ' + airport.country_name,
                        value: airport.code
                    });
                });
                self.setState({destinationAirports: tempAirports});
            }
        });
    }

    handleSetDestination(chosen) {
        this.setState({
            destination: chosen.value
        });
    }

    handleSearch() {

        let self = this;
        let searchBody = {
            request: {
                slice: [
                    {
                        origin: this.state.origin,
                        destination: this.state.destination,
                        date: this.state.departureDate
                    },
                    {
                        origin: this.state.destination,
                        destination: this.state.origin,
                        date: this.state.returnDate
                    }
                ],
                passengers: {
                    adultCount: 1,
                    infantInLapCount: 0,
                    infantInSeatCount: 0,
                    childCount: 0,
                    seniorCount: 0
                },
                solutions: 20,
                refundable: false
            }
        };

        SearchApi.flightSearch(searchBody).then(function (response) {
           console.log('search results: ', response);
            self.props.displaySearchResults(response.trips.tripOption);
        });

    }

    render() {
        return (
            <div style={{padding: 20}} className="pure-g">
                <div style={{display: 'flex', justifyContent: 'flex-start'}} className="pure-u-1">
                    <DatePicker id="departureDate"
                                hintText={<span><TakeOffIcon style={{marginRight: 20}}/> Depart</span>}
                                formatDate={new DateTimeFormat('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                }).format}
                                onChange={this.handleDepartureDateChange.bind(this)}/>
                </div>

                <div className="pure-u-1">
                    <AutoComplete
                        dataSource={this.state.originAirports}
                        hintText="Origin"
                        onUpdateInput={this.handleOriginChange.bind(this)}
                        onNewRequest={this.handleSetOrigin.bind(this)}
                        dataSourceConfig={dataSourceConfig}
                        filter={function () {
                            return true;
                        }}
                    />
                </div>
                <div className="pure-u-1">
                    <AutoComplete
                        dataSource={this.state.destinationAirports}
                        hintText="Destination"
                        onUpdateInput={this.handleDestinationChange.bind(this)}
                        onNewRequest={this.handleSetDestination.bind(this)}
                        dataSourceConfig={dataSourceConfig}
                        filter={function () {
                            return true;
                        }}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start'}} className="pure-u-1">
                    <DatePicker id="returnDate"
                                hintText={<span><LandIcon style={{marginRight: 20}}/> Return</span>}
                                formatDate={new DateTimeFormat('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                }).format}
                                onChange={this.handleReturnDateChange.bind(this)}/>

                </div>

                <div className="pure-u-1">
                    <RaisedButton
                        label="Search"
                        labelPosition="before"
                        primary
                        onClick={this.handleSearch.bind(this)}
                        icon={<SearchIcon />}
                    />
                </div>


            </div>
        );
    }
}

export default Search;