import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from 'containers/Main';
import theme from './theme';
import './index.css';

const App = (props) => {
    const muiTheme = createMuiTheme(theme);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <Main {...props} />
        </MuiThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
