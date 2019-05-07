import "typeface-roboto"
import React from "react"
import ReactDOM from "react-dom"
import Router from "routes/Router"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme, palette } from "@material-ui/core/styles"
import { blue, red } from "@material-ui/core/colors"

const theme = createMuiTheme ({
	typography: {
		useNextVariants: true,
		fontFamily: "'Roboto', sans-serif"
	},
	palette: {
		primary: {
			main: blue [ 800 ]
		},
		secondary: {
			main: red [ 900 ]
		}
	}
})

if ( process.env.NODE_ENV !== "production" ) {
	console.log ( "MUI Theme:", theme )
}

ReactDOM.render (
	<MuiThemeProvider theme={theme} >
		<CssBaseline/>
		<Router/>
	</MuiThemeProvider>,
	document.getElementById ("main")
)
