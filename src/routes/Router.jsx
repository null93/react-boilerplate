import React from "react"
import Home from "pages/Home"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

class Router extends React.Component {

	render () {
		return <BrowserRouter>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	}

}

export default Router
