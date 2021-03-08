import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "react-router-dom"
import "../../style/header.scss"

const Header = () => {
	const [value, setValue] = useState(0)

	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	return (
		<div>
			<AppBar position="static" color="transparent">
				<Tabs value={value} onChange={handleChange}>
					<Tab
						className="tab"
						label="PERSONAL INFO"
						component={Link}
						to="/"
					/>
					<Tab
						className="tab"
						label="SKILLS"
						component={Link}
						to="/skills"
					/>
				</Tabs>
			</AppBar>
		</div>
	)
}
export default Header
