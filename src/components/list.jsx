import React from "react"

export default class List extends React.Component {

	constructor ( props ) {
		super ( props )
		this.state = {}
	}

	render () {
		let fullWidthClass = this.props.full ? "full-width" : ""
		return <div className={ `list ${fullWidthClass}` } >
			{ this.props.children }
		</div>
	}

}
