import React from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import Logo from "images/logo.svg"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	paper: {
		position: "relative",
		padding: theme.spacing.unit * 2,
		minWidth: `${theme.breakpoints.values.sm}px`,
		maxWidth: `${theme.breakpoints.values.md}px`
	},
	logo: {
		position: "absolute",
		height: 40,
		width: 40,
		top: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2
	}
})

class PaperList extends React.Component {

	render () {
		const { classes, children, title } = this.props
		return <Paper className={classes.paper} elevation={1} >
			<Typography variant="title" >{title}</Typography>
			<img className={classes.logo} src={Logo}/>
			<List>{children}</List>
		</Paper>
	}

}

PaperList.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string
}

PaperList.defaultProps = {
	title: "Generic Title"
}

export default withStyles ( styles ) ( PaperList )
