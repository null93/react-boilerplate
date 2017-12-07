import React from "react"

export default class Item extends React.Component {

	constructor ( props ) {
		super ( props )
		this.state = { checked: true }
	}

	isChecked () {
		return this.state.checked
	}

	toggle () {
		const oldValue = this.isChecked ()
		this.setState ({ checked: !oldValue })
	}

	render () {
		let that = this
		let icon = this.state.checked ? "check_box" : "check_box_outline_blank"
		let onClick = () => {
			that.toggle.bind (that) ()
			if ( "onClick" in that.props ) that.props.onClick ()
		}
		return <div className="item" onClick={ onClick } >
			<i className="material-icons" >{ icon }</i>
			<span>{ this.props.value }</span>
		</div>
	}

}
