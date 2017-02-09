import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
class ResultsTable extends Component {



    render() {
        return(
            <Table height='400px'>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>City</TableHeaderColumn>
                        <TableHeaderColumn>Airport</TableHeaderColumn>
                        <TableHeaderColumn>Distance (miles)</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.items.map(function (item, key) {
                        return (
                            <TableRow key={key}>
                                <TableRowColumn>{item.cityName}</TableRowColumn>
                                <TableRowColumn>{item.name} ({item.code})</TableRowColumn>
                                <TableRowColumn>{item.distanceFromDestination}</TableRowColumn>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>
        )
    }

}

export default ResultsTable;