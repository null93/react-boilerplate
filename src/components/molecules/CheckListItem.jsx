import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import CheckOnIcon from "@material-ui/icons/CheckBox"
import CheckOffIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	root: {
		display: "flex",
		cursor: "pointer",
		marginTop: theme.spacing.unit * 2
	},
	text: {
		marginLeft: theme.spacing.unit * 2
	}
})

class CheckListItem extends React.Component {

	constructor ( props ) {
		super ( props )
		this.state = { checked: false }
	}

	onClick () {
		this.setState ( state => ({
			checked: !state.checked
		}))
	}

	render () {
		const { classes, label } = this.props
		const { checked } = this.state
		return <div
			onClick={this.onClick.bind ( this )}
			className={classes.root} >
			{
				checked && <CheckOnIcon/> || <CheckOffIcon/>
			}
			<Typography
				variant="body1"
				className={classes.text} >
				{label}
			</Typography>
		</div>
	}

}

CheckListItem.propTypes = {
	classes: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired
}

export default withStyles ( styles ) ( CheckListItem )
