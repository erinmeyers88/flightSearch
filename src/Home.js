import React, {Component} from 'react';

import Search from './Search';
import ReverseSearch from './ReverseSearch';

import Results from './Results';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            searchResults: [{
                "kind": "qpxExpress#tripsSearch",
                "trips": {
                    "kind": "qpxexpress#tripOptions",
                    "requestId": "PXgp0ruWA9UveZC580Pvkr",
                    "data": {
                        "kind": "qpxexpress#data",
                        "airport": [
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "BOI",
                                "city": "BOI",
                                "name": "Boise Air Term. (Gowen Field)"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "DEN",
                                "city": "DEN",
                                "name": "Denver International"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "IAH",
                                "city": "HOU",
                                "name": "Houston George Bush Intercont."
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "LAX",
                                "city": "LAX",
                                "name": "Los Angeles International"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "ORD",
                                "city": "CHI",
                                "name": "Chicago O'Hare"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "PDX",
                                "city": "PDX",
                                "name": "Portland International"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "SEA",
                                "city": "SEA",
                                "name": "Seattle/Tacoma Sea/Tac"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "SFO",
                                "city": "SFO",
                                "name": "San Francisco International"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "SJC",
                                "city": "SJC",
                                "name": "San Jose Norman Y. Mineta International"
                            },
                            {
                                "kind": "qpxexpress#airportData",
                                "code": "SLC",
                                "city": "SLC",
                                "name": "Salt Lake City International"
                            }
                        ],
                        "city": [
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "BOI",
                                "name": "Boise"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "CHI",
                                "name": "Chicago"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "DEN",
                                "name": "Denver"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "HOU",
                                "name": "Houston"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "LAX",
                                "name": "Los Angeles"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "PDX",
                                "name": "Portland"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "SEA",
                                "name": "Seattle"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "SFO",
                                "name": "San Francisco"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "SJC",
                                "name": "San Jose"
                            },
                            {
                                "kind": "qpxexpress#cityData",
                                "code": "SLC",
                                "name": "Salt Lake City"
                            }
                        ],
                        "aircraft": [
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "319",
                                "name": "Airbus A319"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "320",
                                "name": "Airbus A320"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "738",
                                "name": "Boeing 737"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "739",
                                "name": "Boeing 737"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "73G",
                                "name": "Boeing 737"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "753",
                                "name": "Boeing 757"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "CR7",
                                "name": "Canadair RJ 700"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "CRJ",
                                "name": "Canadair Reg. Jet"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "DH4",
                                "name": "De Havilland-Bombardier Dash-8"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "E70",
                                "name": "Embraer RJ-170"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "E75",
                                "name": "Embraer RJ-175"
                            },
                            {
                                "kind": "qpxexpress#aircraftData",
                                "code": "E7W",
                                "name": "Embraer RJ-175"
                            }
                        ],
                        "tax": [
                            {
                                "kind": "qpxexpress#taxData",
                                "id": "ZP",
                                "name": "US Flight Segment Tax"
                            },
                            {
                                "kind": "qpxexpress#taxData",
                                "id": "AY_001",
                                "name": "US September 11th Security Fee"
                            },
                            {
                                "kind": "qpxexpress#taxData",
                                "id": "US_001",
                                "name": "US Transportation Tax"
                            },
                            {
                                "kind": "qpxexpress#taxData",
                                "id": "XF",
                                "name": "US Passenger Facility Charge"
                            }
                        ],
                        "carrier": [
                            {
                                "kind": "qpxexpress#carrierData",
                                "code": "AS",
                                "name": "Alaska Airlines Inc."
                            },
                            {
                                "kind": "qpxexpress#carrierData",
                                "code": "UA",
                                "name": "United Airlines, Inc."
                            }
                        ]
                    },
                    "tripOption": [
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD346.40",
                            "id": "EUv6Lzywso3U8GcNraGLmR001",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 120,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 120,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "715"
                                            },
                                            "id": "Gmkl7v4ichl5RIjJ",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LBLpKBx8eFQw3TKB",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-04T20:55-08:00",
                                                    "departureTime": "2017-02-04T19:55-07:00",
                                                    "origin": "SLC",
                                                    "destination": "PDX",
                                                    "originTerminal": "1",
                                                    "duration": 120,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASTVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "Gmkl7v4ichl5RIjJ"
                                        }
                                    ],
                                    "baseFareTotal": "USD295.82",
                                    "saleFareTotal": "USD295.82",
                                    "saleTaxTotal": "USD50.58",
                                    "saleTotal": "USD346.40",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD22.18"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD9.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD8.20"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS PDX 147.91LASTVN5 USD 295.82 END ZP PDX SLC XT 22.18US 8.20ZP 11.20AY 9.00XF PDX4.50 SLC4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD346.40",
                            "id": "EUv6Lzywso3U8GcNraGLmR002",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 130,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 130,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "3430"
                                            },
                                            "id": "G7T+5qn6bHXSofCi",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LUq69vB5niPSK6AA",
                                                    "aircraft": "E75",
                                                    "arrivalTime": "2017-02-04T08:10-08:00",
                                                    "departureTime": "2017-02-04T07:00-07:00",
                                                    "origin": "SLC",
                                                    "destination": "PDX",
                                                    "originTerminal": "1",
                                                    "duration": 130,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST AIRLINES AS ALASKASKYWEST",
                                                    "onTimePerformance": 74,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASTVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "G7T+5qn6bHXSofCi"
                                        }
                                    ],
                                    "baseFareTotal": "USD295.82",
                                    "saleFareTotal": "USD295.82",
                                    "saleTaxTotal": "USD50.58",
                                    "saleTotal": "USD346.40",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD22.18"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD9.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD8.20"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS PDX 147.91LASTVN5 USD 295.82 END ZP PDX SLC XT 22.18US 8.20ZP 11.20AY 9.00XF PDX4.50 SLC4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD425.50",
                            "id": "EUv6Lzywso3U8GcNraGLmR006",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 271,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 72,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2323"
                                            },
                                            "id": "Gduspe3Hg4tt0fZD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LHqAZNHgDNJJmUQE",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T17:47-07:00",
                                                    "departureTime": "2017-02-04T16:35-07:00",
                                                    "origin": "SLC",
                                                    "destination": "BOI",
                                                    "originTerminal": "1",
                                                    "duration": 72,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 67,
                                                    "mileage": 289,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 108
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 91,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2307"
                                            },
                                            "id": "G-ATYmHWugaSEK9J",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LJ5pTEWNuEUmJ9Ft",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T20:06-08:00",
                                                    "departureTime": "2017-02-04T19:35-07:00",
                                                    "origin": "BOI",
                                                    "destination": "PDX",
                                                    "duration": 91,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 61,
                                                    "mileage": 343,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "G-ATYmHWugaSEK9J"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "Gduspe3Hg4tt0fZD"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD59.92",
                                    "saleTotal": "USD425.50",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD9.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/BOI AS PDX 217.67LASVN5 USD 365.58 END ZP PDX SLC BOI XT 27.42US 12.30ZP 11.20AY 9.00XF PDX4.50 SLC4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD425.50",
                            "id": "EUv6Lzywso3U8GcNraGLmR003",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 194,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 194,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2323"
                                            },
                                            "id": "GiNx++Nf72IWz+oS",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LHqAZNHgDNJJmUQE",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T17:47-07:00",
                                                    "departureTime": "2017-02-04T16:35-07:00",
                                                    "origin": "SLC",
                                                    "destination": "BOI",
                                                    "originTerminal": "1",
                                                    "duration": 72,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 67,
                                                    "mileage": 289,
                                                    "secure": true,
                                                    "connectionDuration": 33
                                                },
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LiGYw5cSQdKtoJoF",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T18:49-08:00",
                                                    "departureTime": "2017-02-04T18:20-07:00",
                                                    "origin": "BOI",
                                                    "destination": "PDX",
                                                    "duration": 89,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 61,
                                                    "mileage": 343,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "GiNx++Nf72IWz+oS"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD59.92",
                                    "saleTotal": "USD425.50",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD9.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS PDX 217.67LASVN5 USD 365.58 END ZP PDX SLC BOI XT 27.42US 12.30ZP 11.20AY 9.00XF PDX4.50 SLC4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR009",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 299,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 130,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2585"
                                            },
                                            "id": "GokiqagUcIlmx7Ri",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LwL1OgAN83-6ppZh",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T12:30-08:00",
                                                    "departureTime": "2017-02-04T11:20-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SJC",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "B",
                                                    "duration": 130,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 58,
                                                    "mileage": 583,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 65
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 104,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "409"
                                            },
                                            "id": "GUEb1P7TAXxnaU+2",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LeYHrYtpdmtnWcAw",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-04T15:19-08:00",
                                                    "departureTime": "2017-02-04T13:35-08:00",
                                                    "origin": "SJC",
                                                    "destination": "PDX",
                                                    "originTerminal": "B",
                                                    "duration": 104,
                                                    "onTimePerformance": 82,
                                                    "mileage": 569,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "QASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "GUEb1P7TAXxnaU+2"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "GokiqagUcIlmx7Ri"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/SJC AS PDX 217.67QASVN5 USD 365.58 END ZP PDX SLC SJC XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SLC4.50 SJC4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR008",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 290,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 121,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "743"
                                            },
                                            "id": "G+-sXPmtmf9EWFaT",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LlB23FXk9kfIJ10E",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T07:16-08:00",
                                                    "departureTime": "2017-02-04T06:15-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SFO",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "I",
                                                    "duration": 121,
                                                    "onTimePerformance": 83,
                                                    "mileage": 598,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 64
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 105,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "383"
                                            },
                                            "id": "GZ1ZQJSoJTSgBxlX",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LlKw-93p83A2P1v6",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T10:05-08:00",
                                                    "departureTime": "2017-02-04T08:20-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "I",
                                                    "duration": 105,
                                                    "onTimePerformance": 87,
                                                    "mileage": 550,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "QASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "GZ1ZQJSoJTSgBxlX"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "G+-sXPmtmf9EWFaT"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/SFO AS PDX 217.67QASVN5 USD 365.58 END ZP PDX SLC SFO XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SLC4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR007",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 286,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 141,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "3443"
                                            },
                                            "id": "G1+WqJpv2bZnFLfP",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L1EjLQF0IScEF4yE",
                                                    "aircraft": "E75",
                                                    "arrivalTime": "2017-02-04T17:23-08:00",
                                                    "departureTime": "2017-02-04T16:02-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SEA",
                                                    "originTerminal": "1",
                                                    "duration": 141,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST AIRLINES AS ALASKASKYWEST",
                                                    "onTimePerformance": 70,
                                                    "mileage": 687,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 97
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 48,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2047"
                                            },
                                            "id": "GHWf4CoGafYZ5D7B",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 3,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LS-rmzLCtEkY70pO",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T19:48-08:00",
                                                    "departureTime": "2017-02-04T19:00-08:00",
                                                    "origin": "SEA",
                                                    "destination": "PDX",
                                                    "duration": 48,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 45,
                                                    "mileage": 129,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "G1+WqJpv2bZnFLfP"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "GHWf4CoGafYZ5D7B"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/SEA AS PDX 217.67LASVN5 USD 365.58 END ZP PDX SLC SEA XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SLC4.50 SEA4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR005",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 258,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 123,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "707"
                                            },
                                            "id": "GVB+bYHpDEdeNlSL",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LpSWCAptOfDkiJJe",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-04T08:33-08:00",
                                                    "departureTime": "2017-02-04T07:30-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SEA",
                                                    "originTerminal": "1",
                                                    "duration": 123,
                                                    "onTimePerformance": 70,
                                                    "mileage": 687,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 87
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 48,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2039"
                                            },
                                            "id": "GmlXj4rNb1+K3Og4",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L5qVqmwtwgTHw13Z",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T10:48-08:00",
                                                    "departureTime": "2017-02-04T10:00-08:00",
                                                    "origin": "SEA",
                                                    "destination": "PDX",
                                                    "duration": 48,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 42,
                                                    "mileage": 129,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "GmlXj4rNb1+K3Og4"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "GVB+bYHpDEdeNlSL"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/SEA AS PDX 217.67LASVN5 USD 365.58 END ZP PDX SLC SEA XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SLC4.50 SEA4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR00A",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 278,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 108,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "386"
                                            },
                                            "id": "GG6v1uy-bT4wHoOU",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "Lmc0yhQFF0nCRO7r",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T19:43-08:00",
                                                    "departureTime": "2017-02-02T17:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "I",
                                                    "duration": 108,
                                                    "onTimePerformance": 80,
                                                    "mileage": 550,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 67
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 103,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "744"
                                            },
                                            "id": "Grod7wZu-f7BuGrd",
                                            "cabin": "COACH",
                                            "bookingCode": "Q",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LKrx6pP6gBqDksSQ",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T23:33-07:00",
                                                    "departureTime": "2017-02-02T20:50-08:00",
                                                    "origin": "SFO",
                                                    "destination": "SLC",
                                                    "originTerminal": "I",
                                                    "destinationTerminal": "1",
                                                    "duration": 103,
                                                    "onTimePerformance": 83,
                                                    "mileage": 598,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 120,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 120,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "715"
                                            },
                                            "id": "Gmkl7v4ichl5RIjJ",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LBLpKBx8eFQw3TKB",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-04T20:55-08:00",
                                                    "departureTime": "2017-02-04T19:55-07:00",
                                                    "origin": "SLC",
                                                    "destination": "PDX",
                                                    "originTerminal": "1",
                                                    "duration": 120,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "QASVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASTVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "GG6v1uy-bT4wHoOU"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "Gmkl7v4ichl5RIjJ"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AX2rgyLURf+yOdzOY7k48bvTvW2EOhjKpPnsDNrIhn8M",
                                            "segmentId": "Grod7wZu-f7BuGrd"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS X/SFO AS SLC 217.67QASVN5 AS PDX 147.91LASTVN5 USD 365.58 END ZP PDX SFO SLC XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SFO4.50 SLC4.50",
                                    "latestTicketingTime": "2017-02-02T20:54-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD430.00",
                            "id": "EUv6Lzywso3U8GcNraGLmR004",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 98,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 98,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "714"
                                            },
                                            "id": "GjAT7NowvGJa-4wW",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+nWBTH02KNZJ+vb",
                                                    "aircraft": "73G",
                                                    "arrivalTime": "2017-02-02T18:53-07:00",
                                                    "departureTime": "2017-02-02T16:15-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SLC",
                                                    "destinationTerminal": "1",
                                                    "duration": 98,
                                                    "onTimePerformance": 70,
                                                    "mileage": 628,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 256,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 125,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "413"
                                            },
                                            "id": "GCzR8y7u163dkWtl",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LzTDNHpiCQvMuUO7",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T19:35-08:00",
                                                    "departureTime": "2017-02-04T18:30-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SEA",
                                                    "originTerminal": "1",
                                                    "duration": 125,
                                                    "onTimePerformance": 87,
                                                    "mileage": 687,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 85
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 46,
                                            "flight": {
                                                "carrier": "AS",
                                                "number": "2153"
                                            },
                                            "id": "Gq5fHXwUexICKpnY",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+SyrCMLfPMYh7h+",
                                                    "aircraft": "DH4",
                                                    "arrivalTime": "2017-02-04T21:46-08:00",
                                                    "departureTime": "2017-02-04T21:00-08:00",
                                                    "origin": "SEA",
                                                    "destination": "PDX",
                                                    "duration": 46,
                                                    "operatingDisclosure": "OPERATED BY HORIZON AIR AS ALASKAHORIZON",
                                                    "onTimePerformance": 36,
                                                    "mileage": 129,
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "carrier": "AS",
                                            "origin": "PDX",
                                            "destination": "SLC",
                                            "basisCode": "LASTVN5"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "carrier": "AS",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "LASVN5"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "Gq5fHXwUexICKpnY"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AEjTMlG/wZBN+WASAy17s+gDRTgcNrhTJFTjWLsWtuO6",
                                            "segmentId": "GjAT7NowvGJa-4wW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AYTRnpZeCds9ymGWzukV5wG3ULnQ/iKneTDURpw5V4WU",
                                            "segmentId": "GCzR8y7u163dkWtl"
                                        }
                                    ],
                                    "baseFareTotal": "USD365.58",
                                    "saleFareTotal": "USD365.58",
                                    "saleTaxTotal": "USD64.42",
                                    "saleTotal": "USD430.00",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD27.42"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD13.50"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD12.30"
                                        }
                                    ],
                                    "fareCalculation": "PDX AS SLC 147.91LASTVN5 AS X/SEA AS PDX 217.67LASVN5 USD 365.58 END ZP PDX SLC SEA XT 27.42US 12.30ZP 11.20AY 13.50XF PDX4.50 SLC4.50 SEA4.50",
                                    "latestTicketingTime": "2017-02-02T19:14-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD882.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00C",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 444,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 134,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "602"
                                            },
                                            "id": "Gtj-B+HEFc9fzbCi",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LtBApDcoHlfNufCA",
                                                    "aircraft": "319",
                                                    "arrivalTime": "2017-02-04T19:15-08:00",
                                                    "departureTime": "2017-02-04T18:01-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SFO",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "3",
                                                    "duration": 134,
                                                    "mileage": 598,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 200
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "522"
                                            },
                                            "id": "GoTonlLetJXrvZFk",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LPbjmavGX-BH-HSg",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-05T00:25-08:00",
                                                    "departureTime": "2017-02-04T22:35-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 110,
                                                    "onTimePerformance": 70,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "WAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "Gtj-B+HEFc9fzbCi"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GoTonlLetJXrvZFk"
                                        }
                                    ],
                                    "baseFareTotal": "USD774.88",
                                    "saleFareTotal": "USD774.88",
                                    "saleTaxTotal": "USD107.82",
                                    "saleTotal": "USD882.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD58.12"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/SFO UA PDX 147.91WAA0AQEN USD 774.88 END ZP PDX SFO ORD SLC SFO XT 58.12US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD882.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00B",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 435,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 91,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "3645"
                                            },
                                            "id": "GX7B7M2OGIeaPqtz",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LBS8LFXqXo+-bCPs",
                                                    "aircraft": "E70",
                                                    "arrivalTime": "2017-02-04T16:31-07:00",
                                                    "departureTime": "2017-02-04T15:00-07:00",
                                                    "origin": "SLC",
                                                    "destination": "DEN",
                                                    "originTerminal": "1",
                                                    "duration": 91,
                                                    "operatingDisclosure": "OPERATED BY REPUBLIC AIRLINES DBA UNITED EXPRESS",
                                                    "mileage": 389,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 174
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 170,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "745"
                                            },
                                            "id": "GQCjdU8KKGPpa8Mh",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LVburoH5fGgw8oOj",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T21:15-08:00",
                                                    "departureTime": "2017-02-04T19:25-07:00",
                                                    "origin": "DEN",
                                                    "destination": "PDX",
                                                    "duration": 170,
                                                    "onTimePerformance": 80,
                                                    "mileage": 988,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "WAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GX7B7M2OGIeaPqtz"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GQCjdU8KKGPpa8Mh"
                                        }
                                    ],
                                    "baseFareTotal": "USD774.88",
                                    "saleFareTotal": "USD774.88",
                                    "saleTaxTotal": "USD107.82",
                                    "saleTotal": "USD882.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD58.12"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/DEN UA PDX 147.91WAA0AQEN USD 774.88 END ZP PDX SFO ORD SLC DEN XT 58.12US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 DEN4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1007.80",
                            "id": "EUv6Lzywso3U8GcNraGLmR00F",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 499,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 135,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5474"
                                            },
                                            "id": "GprsBn4Roi90xYVD",
                                            "cabin": "COACH",
                                            "bookingCode": "S",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvtHwasu6TeL9z0X",
                                                    "aircraft": "E7W",
                                                    "arrivalTime": "2017-02-04T08:25-08:00",
                                                    "departureTime": "2017-02-04T07:10-07:00",
                                                    "origin": "SLC",
                                                    "destination": "LAX",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "7",
                                                    "duration": 135,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "mileage": 589,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 60
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 104,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "708"
                                            },
                                            "id": "GkoTfSEWNnEFIAoI",
                                            "cabin": "COACH",
                                            "bookingCode": "T",
                                            "bookingCodeCount": 5,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LY1gnPdGNbHx5FSS",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T11:09-08:00",
                                                    "departureTime": "2017-02-04T09:25-08:00",
                                                    "origin": "LAX",
                                                    "destination": "SFO",
                                                    "originTerminal": "7",
                                                    "destinationTerminal": "3",
                                                    "duration": 104,
                                                    "onTimePerformance": 50,
                                                    "mileage": 337,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 86
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 114,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "2038"
                                            },
                                            "id": "GOlNnBQIkSbBdkK5",
                                            "cabin": "COACH",
                                            "bookingCode": "T",
                                            "bookingCodeCount": 5,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LRCuZCYTG6p+qzKW",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-04T14:29-08:00",
                                                    "departureTime": "2017-02-04T12:35-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 114,
                                                    "onTimePerformance": 80,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A9wbc59Kc4H3WjMZlfEYMtaZq2Lem0hLQoi8SriSN17o",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "LAX",
                                            "basisCode": "SAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "Av7tDscyE9LJIhI5tlPHa++7pUbqDCJ53O0n0FvudhEw",
                                            "carrier": "UA",
                                            "origin": "LAX",
                                            "destination": "PDX",
                                            "basisCode": "TAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Av7tDscyE9LJIhI5tlPHa++7pUbqDCJ53O0n0FvudhEw",
                                            "segmentId": "GkoTfSEWNnEFIAoI"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Av7tDscyE9LJIhI5tlPHa++7pUbqDCJ53O0n0FvudhEw",
                                            "segmentId": "GOlNnBQIkSbBdkK5"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A9wbc59Kc4H3WjMZlfEYMtaZq2Lem0hLQoi8SriSN17o",
                                            "segmentId": "GprsBn4Roi90xYVD"
                                        }
                                    ],
                                    "baseFareTotal": "USD887.43",
                                    "saleFareTotal": "USD887.43",
                                    "saleTaxTotal": "USD120.37",
                                    "saleTotal": "USD1007.80",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD66.57"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD24.60"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/LAX 134.88SAA0AKEN UA X/SFO UA PDX 125.58TAA0AQEN USD 887.43 END ZP PDX SFO ORD SLC LAX SFO XT 66.57US 24.60ZP 11.20AY 18.00XF PDX4.50 SFO4.50 LAX4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1009.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00D",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 444,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 152,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5223"
                                            },
                                            "id": "GYxlNthW9VhhFgEW",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 2,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LoIWVMKn8arxHDkX",
                                                    "aircraft": "E7W",
                                                    "arrivalTime": "2017-02-04T09:37-08:00",
                                                    "departureTime": "2017-02-04T08:05-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SFO",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "3",
                                                    "duration": 152,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "onTimePerformance": 40,
                                                    "mileage": 598,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 178
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 114,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "2038"
                                            },
                                            "id": "GOlNnBQIkSbBdkK5",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 2,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LRCuZCYTG6p+qzKW",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-04T14:29-08:00",
                                                    "departureTime": "2017-02-04T12:35-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 114,
                                                    "onTimePerformance": 80,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AXNvs2DBaoCeAhROAdEEwmXCXENU+uWmGKFAkd1MJcbM",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "UAA0AKEY"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AXNvs2DBaoCeAhROAdEEwmXCXENU+uWmGKFAkd1MJcbM",
                                            "segmentId": "GYxlNthW9VhhFgEW"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AXNvs2DBaoCeAhROAdEEwmXCXENU+uWmGKFAkd1MJcbM",
                                            "segmentId": "GOlNnBQIkSbBdkK5"
                                        }
                                    ],
                                    "baseFareTotal": "USD893.02",
                                    "saleFareTotal": "USD893.02",
                                    "saleTaxTotal": "USD116.68",
                                    "saleTotal": "USD1009.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD66.98"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/SFO UA PDX 266.05UAA0AKEY USD 893.02 END ZP PDX SFO ORD SLC SFO XT 66.98US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1065.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00E",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 331,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 152,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5223"
                                            },
                                            "id": "GYxlNthW9VhhFgEW",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 1,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LoIWVMKn8arxHDkX",
                                                    "aircraft": "E7W",
                                                    "arrivalTime": "2017-02-04T09:37-08:00",
                                                    "departureTime": "2017-02-04T08:05-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SFO",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "3",
                                                    "duration": 152,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "onTimePerformance": 40,
                                                    "mileage": 598,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 63
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 116,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5616"
                                            },
                                            "id": "G1vJCk4LnJgndp9u",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 1,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LE8oBI1kmCIFd5KI",
                                                    "aircraft": "CRJ",
                                                    "arrivalTime": "2017-02-04T12:36-08:00",
                                                    "departureTime": "2017-02-04T10:40-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 116,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AWeYbib4IBilr+EUpbBB+s4ZdVTH7ezFNnFvdATBUduI",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "EAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AWeYbib4IBilr+EUpbBB+s4ZdVTH7ezFNnFvdATBUduI",
                                            "segmentId": "G1vJCk4LnJgndp9u"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AWeYbib4IBilr+EUpbBB+s4ZdVTH7ezFNnFvdATBUduI",
                                            "segmentId": "GYxlNthW9VhhFgEW"
                                        }
                                    ],
                                    "baseFareTotal": "USD945.11",
                                    "saleFareTotal": "USD945.11",
                                    "saleTaxTotal": "USD120.59",
                                    "saleTotal": "USD1065.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD70.89"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/SFO UA PDX 318.14EAA0AQEN USD 945.11 END ZP PDX SFO ORD SLC SFO XT 70.89US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT"
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1296.80",
                            "id": "EUv6Lzywso3U8GcNraGLmR00K",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 559,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 87,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1536"
                                            },
                                            "id": "GnF+RRxMujr2iOl+",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L+TRGZ63NISHjXew",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T13:42-07:00",
                                                    "departureTime": "2017-02-04T12:15-07:00",
                                                    "origin": "SLC",
                                                    "destination": "DEN",
                                                    "originTerminal": "1",
                                                    "duration": 87,
                                                    "mileage": 389,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 123
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 161,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "737"
                                            },
                                            "id": "GYqSdsotC9yRBLHw",
                                            "cabin": "COACH",
                                            "bookingCode": "H",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LwmUrzsJvUGXouGy",
                                                    "aircraft": "753",
                                                    "arrivalTime": "2017-02-04T17:26-08:00",
                                                    "departureTime": "2017-02-04T15:45-07:00",
                                                    "origin": "DEN",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 161,
                                                    "onTimePerformance": 60,
                                                    "mileage": 965,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 79
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 109,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "766"
                                            },
                                            "id": "GB538H+Qb+s5VsdR",
                                            "cabin": "COACH",
                                            "bookingCode": "H",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LbXNoAUsKHfIOuXo",
                                                    "aircraft": "320",
                                                    "arrivalTime": "2017-02-04T20:34-08:00",
                                                    "departureTime": "2017-02-04T18:45-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 109,
                                                    "onTimePerformance": 70,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "DEN",
                                            "basisCode": "UAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "carrier": "UA",
                                            "origin": "DEN",
                                            "destination": "PDX",
                                            "basisCode": "HAA0AKEY"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "segmentId": "GB538H+Qb+s5VsdR"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "segmentId": "GYqSdsotC9yRBLHw"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "segmentId": "GnF+RRxMujr2iOl+"
                                        }
                                    ],
                                    "baseFareTotal": "USD1156.27",
                                    "saleFareTotal": "USD1156.27",
                                    "saleTaxTotal": "USD140.53",
                                    "saleTotal": "USD1296.80",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD86.73"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD24.60"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/DEN 202.79UAA0AKEN UA X/SFO UA PDX 326.51HAA0AKEY USD 1156.27 END ZP PDX SFO ORD SLC DEN SFO XT 86.73US 24.60ZP 11.20AY 18.00XF PDX4.50 SFO4.50 DEN4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1296.80",
                            "id": "EUv6Lzywso3U8GcNraGLmR00J",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 555,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 95,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5472"
                                            },
                                            "id": "G3XR5SsD-qUxSyZk",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "L-sA7mXSd5JHur4i",
                                                    "aircraft": "E7W",
                                                    "arrivalTime": "2017-02-04T11:50-07:00",
                                                    "departureTime": "2017-02-04T10:15-07:00",
                                                    "origin": "SLC",
                                                    "destination": "DEN",
                                                    "originTerminal": "1",
                                                    "duration": 95,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "mileage": 389,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 95
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 165,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "2031"
                                            },
                                            "id": "GemKFZnLkGdAZ9gv",
                                            "cabin": "COACH",
                                            "bookingCode": "H",
                                            "bookingCodeCount": 3,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LD+Jv1HLWsYxVu0r",
                                                    "aircraft": "753",
                                                    "arrivalTime": "2017-02-04T15:10-08:00",
                                                    "departureTime": "2017-02-04T13:25-07:00",
                                                    "origin": "DEN",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 165,
                                                    "onTimePerformance": 70,
                                                    "mileage": 965,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 90
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5234"
                                            },
                                            "id": "GgXIJhEU-DJjDree",
                                            "cabin": "COACH",
                                            "bookingCode": "H",
                                            "bookingCodeCount": 3,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvHYLUjhiA-eCOqc",
                                                    "aircraft": "CR7",
                                                    "arrivalTime": "2017-02-04T18:30-08:00",
                                                    "departureTime": "2017-02-04T16:40-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 110,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "DEN",
                                            "basisCode": "UAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "carrier": "UA",
                                            "origin": "DEN",
                                            "destination": "PDX",
                                            "basisCode": "HAA0AKEY"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "segmentId": "GgXIJhEU-DJjDree"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "Aua7hP5J/6X13IXVDsMKhSxJF0ESOOwjJBg/I6zFHwCM",
                                            "segmentId": "GemKFZnLkGdAZ9gv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "segmentId": "G3XR5SsD-qUxSyZk"
                                        }
                                    ],
                                    "baseFareTotal": "USD1156.27",
                                    "saleFareTotal": "USD1156.27",
                                    "saleTaxTotal": "USD140.53",
                                    "saleTotal": "USD1296.80",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD86.73"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD24.60"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/DEN 202.79UAA0AKEN UA X/SFO UA PDX 326.51HAA0AKEY USD 1156.27 END ZP PDX SFO ORD SLC DEN SFO XT 86.73US 24.60ZP 11.20AY 18.00XF PDX4.50 SFO4.50 DEN4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1395.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00I",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 929,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 225
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 218,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1200"
                                            },
                                            "id": "GDz+EkCzKQNrmNlF",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LmZ4IvUunEX1o-h8",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:08-06:00",
                                                    "departureTime": "2017-02-03T00:30-08:00",
                                                    "origin": "SFO",
                                                    "destination": "IAH",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "C",
                                                    "duration": 218,
                                                    "onTimePerformance": 80,
                                                    "mileage": 1632,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 172
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 204,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "3441"
                                            },
                                            "id": "G0G-dJ80ks5BChgv",
                                            "cabin": "COACH",
                                            "bookingCode": "M",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LV+A2yBYewBuxQVa",
                                                    "aircraft": "E70",
                                                    "arrivalTime": "2017-02-03T11:24-07:00",
                                                    "departureTime": "2017-02-03T09:00-06:00",
                                                    "origin": "IAH",
                                                    "destination": "SLC",
                                                    "originTerminal": "B",
                                                    "duration": 204,
                                                    "operatingDisclosure": "OPERATED BY REPUBLIC AIRLINES DBA UNITED EXPRESS",
                                                    "mileage": 1193,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 444,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 134,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "602"
                                            },
                                            "id": "Gtj-B+HEFc9fzbCi",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LtBApDcoHlfNufCA",
                                                    "aircraft": "319",
                                                    "arrivalTime": "2017-02-04T19:15-08:00",
                                                    "departureTime": "2017-02-04T18:01-07:00",
                                                    "origin": "SLC",
                                                    "destination": "SFO",
                                                    "originTerminal": "1",
                                                    "destinationTerminal": "3",
                                                    "duration": 134,
                                                    "mileage": 598,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 200
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "522"
                                            },
                                            "id": "GoTonlLetJXrvZFk",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LPbjmavGX-BH-HSg",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-05T00:25-08:00",
                                                    "departureTime": "2017-02-04T22:35-08:00",
                                                    "origin": "SFO",
                                                    "destination": "PDX",
                                                    "originTerminal": "3",
                                                    "duration": 110,
                                                    "onTimePerformance": 70,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "HOU",
                                            "basisCode": "UAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AXQfiwfx5OAqABdlppvxDw8lSmpWV+uhr7omjwS52XOU",
                                            "carrier": "UA",
                                            "origin": "HOU",
                                            "destination": "SLC",
                                            "basisCode": "MAA0AFEY"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "WAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AXQfiwfx5OAqABdlppvxDw8lSmpWV+uhr7omjwS52XOU",
                                            "segmentId": "G0G-dJ80ks5BChgv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "segmentId": "GDz+EkCzKQNrmNlF"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "Gtj-B+HEFc9fzbCi"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GoTonlLetJXrvZFk"
                                        }
                                    ],
                                    "baseFareTotal": "USD1252.10",
                                    "saleFareTotal": "USD1252.10",
                                    "saleTaxTotal": "USD143.60",
                                    "saleTotal": "USD1395.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD93.90"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/HOU 464.19UAA0AKEN UA SLC 640.00MAA0AFEY UA X/SFO UA PDX 147.91WAA0AQEN USD 1252.10 END ZP PDX SFO IAH SLC SFO XT 93.90US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 SFO4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1395.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00H",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 929,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 225
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 218,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1200"
                                            },
                                            "id": "GDz+EkCzKQNrmNlF",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LmZ4IvUunEX1o-h8",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:08-06:00",
                                                    "departureTime": "2017-02-03T00:30-08:00",
                                                    "origin": "SFO",
                                                    "destination": "IAH",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "C",
                                                    "duration": 218,
                                                    "onTimePerformance": 80,
                                                    "mileage": 1632,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 172
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 204,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "3441"
                                            },
                                            "id": "G0G-dJ80ks5BChgv",
                                            "cabin": "COACH",
                                            "bookingCode": "M",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LV+A2yBYewBuxQVa",
                                                    "aircraft": "E70",
                                                    "arrivalTime": "2017-02-03T11:24-07:00",
                                                    "departureTime": "2017-02-03T09:00-06:00",
                                                    "origin": "IAH",
                                                    "destination": "SLC",
                                                    "originTerminal": "B",
                                                    "duration": 204,
                                                    "operatingDisclosure": "OPERATED BY REPUBLIC AIRLINES DBA UNITED EXPRESS",
                                                    "mileage": 1193,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 435,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 91,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "3645"
                                            },
                                            "id": "GX7B7M2OGIeaPqtz",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LBS8LFXqXo+-bCPs",
                                                    "aircraft": "E70",
                                                    "arrivalTime": "2017-02-04T16:31-07:00",
                                                    "departureTime": "2017-02-04T15:00-07:00",
                                                    "origin": "SLC",
                                                    "destination": "DEN",
                                                    "originTerminal": "1",
                                                    "duration": 91,
                                                    "operatingDisclosure": "OPERATED BY REPUBLIC AIRLINES DBA UNITED EXPRESS",
                                                    "mileage": 389,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 174
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 170,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "745"
                                            },
                                            "id": "GQCjdU8KKGPpa8Mh",
                                            "cabin": "COACH",
                                            "bookingCode": "W",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LVburoH5fGgw8oOj",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-04T21:15-08:00",
                                                    "departureTime": "2017-02-04T19:25-07:00",
                                                    "origin": "DEN",
                                                    "destination": "PDX",
                                                    "duration": 170,
                                                    "onTimePerformance": 80,
                                                    "mileage": 988,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "HOU",
                                            "basisCode": "UAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AXQfiwfx5OAqABdlppvxDw8lSmpWV+uhr7omjwS52XOU",
                                            "carrier": "UA",
                                            "origin": "HOU",
                                            "destination": "SLC",
                                            "basisCode": "MAA0AFEY"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "PDX",
                                            "basisCode": "WAA0AQEN"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AXQfiwfx5OAqABdlppvxDw8lSmpWV+uhr7omjwS52XOU",
                                            "segmentId": "G0G-dJ80ks5BChgv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "segmentId": "GDz+EkCzKQNrmNlF"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AVzacM5sgodvLbsl16SGYdRTKLt9L23jpbemBkPKiFQg",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GX7B7M2OGIeaPqtz"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A3e3PM5vi7miXoB9rupoKeaibRhb9Z7a+GeFoHN2ESg/",
                                            "segmentId": "GQCjdU8KKGPpa8Mh"
                                        }
                                    ],
                                    "baseFareTotal": "USD1252.10",
                                    "saleFareTotal": "USD1252.10",
                                    "saleTaxTotal": "USD143.60",
                                    "saleTotal": "USD1395.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD93.90"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/HOU 464.19UAA0AKEN UA SLC 640.00MAA0AFEY UA X/DEN UA PDX 147.91WAA0AQEN USD 1252.10 END ZP PDX SFO IAH SLC DEN XT 93.90US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 DEN4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        },
                        {
                            "kind": "qpxexpress#tripOption",
                            "saleTotal": "USD1417.70",
                            "id": "EUv6Lzywso3U8GcNraGLmR00G",
                            "slice": [
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 939,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 110,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "1217"
                                            },
                                            "id": "GDcYnVK0YF7d1QXv",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LvMQROdjRwZkaLAr",
                                                    "aircraft": "739",
                                                    "arrivalTime": "2017-02-02T20:45-08:00",
                                                    "departureTime": "2017-02-02T18:55-08:00",
                                                    "origin": "PDX",
                                                    "destination": "SFO",
                                                    "destinationTerminal": "3",
                                                    "duration": 110,
                                                    "mileage": 550,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 207
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 245,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "680"
                                            },
                                            "id": "GU1Mf-dxe-25ylir",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "0",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LTKY683EI6MEJdcy",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T06:17-06:00",
                                                    "departureTime": "2017-02-03T00:12-08:00",
                                                    "origin": "SFO",
                                                    "destination": "ORD",
                                                    "originTerminal": "3",
                                                    "destinationTerminal": "1",
                                                    "duration": 245,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1841,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 161
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 216,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "588"
                                            },
                                            "id": "GuiQyN3I7NbU64sD",
                                            "cabin": "COACH",
                                            "bookingCode": "L",
                                            "bookingCodeCount": 9,
                                            "marriedSegmentGroup": "1",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LALaOQlt42LFgkDa",
                                                    "aircraft": "738",
                                                    "arrivalTime": "2017-02-03T11:34-07:00",
                                                    "departureTime": "2017-02-03T08:58-06:00",
                                                    "origin": "ORD",
                                                    "destination": "SLC",
                                                    "originTerminal": "1",
                                                    "duration": 216,
                                                    "onTimePerformance": 90,
                                                    "mileage": 1246,
                                                    "meal": "Food for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "qpxexpress#sliceInfo",
                                    "duration": 337,
                                    "segment": [
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 97,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "5843"
                                            },
                                            "id": "Ge1-IGr9nYSPoHn9",
                                            "cabin": "COACH",
                                            "bookingCode": "U",
                                            "bookingCodeCount": 3,
                                            "marriedSegmentGroup": "2",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LKnjdOI9bdMOE9fH",
                                                    "aircraft": "CR7",
                                                    "arrivalTime": "2017-02-04T10:32-07:00",
                                                    "departureTime": "2017-02-04T08:55-07:00",
                                                    "origin": "SLC",
                                                    "destination": "DEN",
                                                    "originTerminal": "1",
                                                    "duration": 97,
                                                    "operatingDisclosure": "OPERATED BY SKYWEST DBA UNITED EXPRESS",
                                                    "onTimePerformance": 90,
                                                    "mileage": 389,
                                                    "secure": true
                                                }
                                            ],
                                            "connectionDuration": 68
                                        },
                                        {
                                            "kind": "qpxexpress#segmentInfo",
                                            "duration": 172,
                                            "flight": {
                                                "carrier": "UA",
                                                "number": "276"
                                            },
                                            "id": "G7Wsqp-MHQC664OM",
                                            "cabin": "COACH",
                                            "bookingCode": "E",
                                            "bookingCodeCount": 7,
                                            "marriedSegmentGroup": "3",
                                            "leg": [
                                                {
                                                    "kind": "qpxexpress#legInfo",
                                                    "id": "LXdY5KcXJfECUM5a",
                                                    "aircraft": "320",
                                                    "arrivalTime": "2017-02-04T13:32-08:00",
                                                    "departureTime": "2017-02-04T11:40-07:00",
                                                    "origin": "DEN",
                                                    "destination": "PDX",
                                                    "duration": 172,
                                                    "onTimePerformance": 90,
                                                    "mileage": 988,
                                                    "meal": "Food and Beverages for Purchase",
                                                    "secure": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "pricing": [
                                {
                                    "kind": "qpxexpress#pricingInfo",
                                    "fare": [
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "carrier": "UA",
                                            "origin": "PDX",
                                            "destination": "CHI",
                                            "basisCode": "EAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "carrier": "UA",
                                            "origin": "CHI",
                                            "destination": "SLC",
                                            "basisCode": "LAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "carrier": "UA",
                                            "origin": "SLC",
                                            "destination": "DEN",
                                            "basisCode": "UAA0AKEN"
                                        },
                                        {
                                            "kind": "qpxexpress#fareInfo",
                                            "id": "AtfYw3Dkt8s/2HmeERSNwQscT0awAxhape3uWA6agXfs",
                                            "carrier": "UA",
                                            "origin": "DEN",
                                            "destination": "PDX",
                                            "basisCode": "EAA0AFEY"
                                        }
                                    ],
                                    "segmentPricing": [
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GU1Mf-dxe-25ylir"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "A4aXJU7vbo+K0ifa/RL37sBYZbjNRZkq5/SDu4aJkXLY",
                                            "segmentId": "GuiQyN3I7NbU64sD"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "ASKaWZ6fDszmDEXq62zNS1gaWeFQwdEBKawAPg9rZ9L2",
                                            "segmentId": "GDcYnVK0YF7d1QXv"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AP4a5LMFEO4yAGVQiXtOA3FgBfQV6HR/3KJlSwl+n95A",
                                            "segmentId": "Ge1-IGr9nYSPoHn9"
                                        },
                                        {
                                            "kind": "qpxexpress#segmentPricing",
                                            "fareId": "AtfYw3Dkt8s/2HmeERSNwQscT0awAxhape3uWA6agXfs",
                                            "segmentId": "G7Wsqp-MHQC664OM"
                                        }
                                    ],
                                    "baseFareTotal": "USD1272.55",
                                    "saleFareTotal": "USD1272.55",
                                    "saleTaxTotal": "USD145.15",
                                    "saleTotal": "USD1417.70",
                                    "passengers": {
                                        "kind": "qpxexpress#passengerCounts",
                                        "adultCount": 1
                                    },
                                    "tax": [
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "US_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "US",
                                            "country": "US",
                                            "salePrice": "USD95.45"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "AY_001",
                                            "chargeType": "GOVERNMENT",
                                            "code": "AY",
                                            "country": "US",
                                            "salePrice": "USD11.20"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "XF",
                                            "chargeType": "GOVERNMENT",
                                            "code": "XF",
                                            "country": "US",
                                            "salePrice": "USD18.00"
                                        },
                                        {
                                            "kind": "qpxexpress#taxInfo",
                                            "id": "ZP",
                                            "chargeType": "GOVERNMENT",
                                            "code": "ZP",
                                            "country": "US",
                                            "salePrice": "USD20.50"
                                        }
                                    ],
                                    "fareCalculation": "PDX UA X/SFO UA X/CHI 490.23EAA0AKEN UA SLC 136.74LAA0AKEN UA X/DEN 202.79UAA0AKEN UA PDX 442.79EAA0AFEY USD 1272.55 END ZP PDX SFO ORD SLC DEN XT 95.45US 20.50ZP 11.20AY 18.00XF PDX4.50 SFO4.50 SLC4.50 DEN4.50",
                                    "latestTicketingTime": "2017-02-02T21:54-05:00",
                                    "ptc": "ADT",
                                    "refundable": true
                                }
                            ]
                        }
                    ]
                }
            }]
        }
    }

    componentWillMount() {

    }

    // displaySearchResults(searchResults) {
    //     this.setState({
    //         searchResults: searchResults
    //     });
    // }


    render() {
        return (
            <div>
                {/*<Search/>*/}
                <ReverseSearch {...this.props}/>
                {/*<Results results={this.state.searchResults[0].trips.tripOption}/>*/}
            </div>

        );
    }
}

export default Home;