import React from "react"

import Item from "components/item"
import List from "components/list"

import ImageLogo from "assets/images/logo.svg"

export default class App extends React.Component {

	constructor ( props ) {
		super ( props )
		this.state = { angle: 0 }
	}

	rotate () {
		this.setState ({ angle: this.state.angle + 10 })
	}

	render () {
		return <div className="app" >
			<h1>React Boilerplate ( Webpack + Babel + ES6 )</h1>
			<img
				src={ ImageLogo }
				style={{ transform: `rotate(${this.state.angle}deg)` }} />
			<List full={ true } >
				<Item value="ES6 javascript support"
					onClick={ this.rotate.bind (this) } />
				<Item value="SCSS support"
					onClick={ this.rotate.bind (this) } />
				<Item value="JSX transpiler"
					onClick={ this.rotate.bind (this) } />
				<Item value="jQuery ready"
					onClick={ this.rotate.bind (this) } />
				<Item value="Open Sans font"
					onClick={ this.rotate.bind (this) } />
				<Item value="Material design icons"
					onClick={ this.rotate.bind (this) } />
			</List>
		</div>
	}

}
