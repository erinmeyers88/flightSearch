import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import KeyboardLeftArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const customTheme = getMuiTheme({
    palette: {
        primary1Color: '#2100FF',
        primary2Color: '#4CD9D6',
        // primary3Color: grey400,
        accent1Color: '#C56038',
        // accent2Color: grey100,
        // accent3Color: grey500,
        // textColor: 'white',
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: 'yellow'
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
    }
});


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            drawer: false,
        };
    }

    componentDidMount() {

    }

    toggleDrawer() {
        this.setState({
            drawer: !this.state.drawer
        });
    }

    goHome() {
        browserHistory.push('/');
    }

    render() {
        let self = this;
        let children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                online: window.navigator.onLine,
            });
        });

        return (
            <MuiThemeProvider muiTheme={customTheme}>
                <div style={{height: '100vh'}}>
                    <AppBar
                        title="Flight Search"
                        titleStyle={{cursor: 'pointer'}}
                        onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                        iconElementRight={<div>
                            {/*<Link to="/add"> <IconButton><PersonAdd/></IconButton></Link>*/}
                        </div>}
                        onTitleTouchTap={this.goHome.bind(this)}

                    />

                    <Drawer open={this.state.drawer}>
                        <MenuItem onTouchTap={this.toggleDrawer.bind(this)} rightIcon={<KeyboardLeftArrow />}/>
                        <MenuItem primaryText="Add Guest" rightIcon={<PersonAdd />}/>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>

                    <div style={{height: 'calc(100% - 64px)'}}>
                        {children}
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
