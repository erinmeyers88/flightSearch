import React, {Component} from 'react';
import SearchApi from './searchApi';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TakeOffIcon from 'material-ui/svg-icons/action/flight-takeoff';
import LandIcon from 'material-ui/svg-icons/action/flight-land';
import moment from 'moment';
import * as _ from 'underscore';

import airportsData from './airportsData.json';
import ResultsTable from './ResultsTable';

let DateTimeFormat = global.Intl.DateTimeFormat;

const dataSourceConfig = {
    text: 'text',
    value: 'value',
};

const originDateSource = {
    text: 'departure',
    value: 'departure'
};

const dateFormat = 'YYYY-MM-DD';

class Search extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            online: props.online,
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({online: nextProps.online})
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

    // handleOriginChange(searchString, dataSource) {
    //     let self = this;
    //     SearchApi.getAirports(searchString).then(function (response) {
    //         if (response.airports) {
    //             let tempAirports = [];
    //             response.airports.map(function (airport) {
    //                 tempAirports.push({
    //                     text: airport.code + '-' + airport.name + ', ' + airport.country_name,
    //                     value: airport.code
    //                 });
    //             });
    //             self.setState({originAirports: tempAirports});
    //         }
    //     });
    // }

    handleSetOrigin(chosen) {
        this.setState({
            origin: chosen.value
        });
    }

    handleDestinationChange(searchString, dataSource) {
        let self = this;
        SearchApi.getAirports(searchString).then(function (response) {
            if (response && response.airports) {
                let tempAirports = [];
                response.airports.map(function (airport) {
                    tempAirports.push({
                        text: airport.code + '-' + airport.name + ', ' + airport.country_name,
                        value: airport.code
                    });
                });
                self.setState({destinationAirports: tempAirports, searchText: searchString});
            }
        });
    }

    handleSetDestination(chosen) {
        let self = this;


        this.setState({destination: _.findWhere(airportsData, {code: chosen.value}) });


        // SearchApi.getRoutes(chosen.value).then(function (response) {
        //     self.reduceAirports(response);
        // });


        SearchApi.getAllRoutes().then(function (response) {
            console.log('all routes', response);
            // self.reduceAirports(response);

            localStorage.setItem('routes', JSON.stringify(response))

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

        // SearchApi.flightSearch(searchBody).then(function (response) {
        //
        // });

    }

    reduceAirports(list) {
        let self = this;
        let tempList = [];
        let airportInfoList = [];

        list.map(function (item) {
            if (!_.contains(tempList, item.departure)) {
                tempList.push(item.departure);
            }
        });

        tempList.map(function (listItem) {
            airportsData.map(function (airport) {
                if (airport.code == listItem) {
                    airportInfoList.push(airport);
                }
            });
        });

        airportInfoList.map(function (airport) {
           airport.distanceFromDestination = self.calculateDistance(
                self.state.destination.coordinates.lat,
                self.state.destination.coordinates.lon,
                airport.coordinates.lat,
                airport.coordinates.lon);
        });

        this.setState({originAirports: _.sortBy(airportInfoList, 'distanceFromDestination')});
    }

    calculateDistance(lat1, lon1, lat2, lon2, unit) {
        // console.log('calculating distance: ', lat1);
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }

        return Math.round(dist)
    }

    render() {
        let self = this;
        return (
            <div style={{padding: 20}} className="pure-g">
                {/*<div style={{display: 'flex', justifyContent: 'flex-start'}} className="pure-u-1">*/}
                {/*<DatePicker id="departureDate"*/}
                {/*hintText={<span><TakeOffIcon style={{marginRight: 20}}/> Depart</span>}*/}
                {/*formatDate={new DateTimeFormat('en-US', {*/}
                {/*day: 'numeric',*/}
                {/*month: 'long',*/}
                {/*year: 'numeric',*/}
                {/*}).format}*/}
                {/*onChange={this.handleDepartureDateChange.bind(this)}/>*/}
                {/*</div>*/}


                {this.state.online && <div className="pure-u-1" style={{marginBottom: 30}}>
                    <AutoComplete
                        fullWidth
                        onFocus={() => {self.setState({searchText: ''})}}
                        dataSource={this.state.destinationAirports}
                        hintText="Destination"
                        onUpdateInput={this.handleDestinationChange.bind(this)}
                        onNewRequest={this.handleSetDestination.bind(this)}
                        dataSourceConfig={dataSourceConfig}
                        filter={() => {return true}}
                        searchText={this.state.searchText}
                    />
                </div>}

                {/*<div className="pure-u-1">*/}
                {/*<AutoComplete*/}
                {/*dataSource={this.state.originAirports}*/}
                {/*hintText="Origin"*/}
                {/*onNewRequest={this.handleSetOrigin.bind(this)}*/}
                {/*dataSourceConfig={originDateSource}*/}
                {/*/>*/}
                {/*</div>*/}

                {/*<div style={{display: 'flex', justifyContent: 'flex-start'}} className="pure-u-1">*/}
                {/*<DatePicker id="returnDate"*/}
                {/*hintText={<span><LandIcon style={{marginRight: 20}}/> Return</span>}*/}
                {/*formatDate={new DateTimeFormat('en-US', {*/}
                {/*day: 'numeric',*/}
                {/*month: 'long',*/}
                {/*year: 'numeric',*/}
                {/*}).format}*/}
                {/*onChange={this.handleReturnDateChange.bind(this)}/>*/}

                {/*</div>*/}

                {/*<div className="pure-u-1">*/}
                {/*<RaisedButton*/}
                {/*label="Search"*/}
                {/*labelPosition="before"*/}
                {/*primary*/}
                {/*onClick={this.handleSearch.bind(this)}*/}
                {/*icon={<SearchIcon />}*/}
                {/*/>*/}
                {/*</div>*/}

                {this.state.destination &&
                <div className="pure-u-1" >
                    <div style={{marginBottom: 30, fontWeight: 'bold'}}>{this.state.originAirports.length} possible origins</div>
                    <div style={{marginBottom: 50}}>Select airports below to search for prices</div>
                    <div className="pure-u-1"><ResultsTable items={this.state.originAirports}/></div>
                </div>}


                {!this.state.online &&
                <div className="pure-u-1">This feature currently unavailable</div>
                }


            </div>
        );
    }
}

export default Search;