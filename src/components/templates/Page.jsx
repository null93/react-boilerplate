import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	root: {
		height: "100%",
		width: "100%",
		margin: 0
	}
})

class Page extends React.Component {

	componentWillMount () {
		let { title } = this.props
		document.title = title
	}

	render () {
		const { classes, children } = this.props
		return <Grid
			className={classes.root}
			container spacing={16}
			alignItems="center"
			justify="center" >
			{children}
		</Grid>
	}

}

Page.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string
}

Page.defaultProps = {
	title: "Generic Title"
}

export default withStyles ( styles ) ( Page )
