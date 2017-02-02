import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Results extends Component {


componentWillMount() {
console.log(this.props.results);
}


    render() {
        return (
            <div>
                {this.props.results.map(function (result, key) {
                    return(
                        <Card key={key}>
                            <CardHeader
                                title={result.saleTotal}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                        </Card>
                    )

                })}
            </div>

        );
    }
}

export default Results;