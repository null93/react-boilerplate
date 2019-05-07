import React from "react"
import Page from "templates/Page"
import CheckListItem from "molecules/CheckListItem"
import PaperList from "organisms/PaperList"

class Home extends React.Component {

	render () {
		return <Page title="Home Page" >
			<PaperList title="Feature List:" >
				<CheckListItem label="Atomic Project Structure" />
				<CheckListItem label="Material-UI React Library" />
				<CheckListItem label="React Router Integrated" />
				<CheckListItem label="ParcelJS Build System" />
				<CheckListItem label="Roboto Font Installed" />
				<CheckListItem label="Docker Container For Project" />
				<CheckListItem label="Docker-Sync & Docker-Compose Files" />
			</PaperList>
		</Page>
	}

}

export default Home
