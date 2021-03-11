import Header from "./components/partsOfScreen/header"
import PersonalInfo from "./components/mainScreens/personalInfoPage"
import SkillsPage from "./components/mainScreens/skillsPage"
import {
	useLocation,
	Route,
	Switch,
	useHistory,
} from "react-router-dom"
import "./style/style.scss"
import { Container } from "@material-ui/core"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

function App() {
	const [value, setValue] = useState(0)
	const history = useHistory()
	useEffect(() => {
		setValue(0)
		history.push("/")
	}, [history])
	const location = useLocation()
	return (
		<div className="wholePage">
			<Container maxWidth="md">
				<div className="wholeApp">
					<Header setValue={setValue} value={value} />
					<AnimatePresence exitBeforeEnter>
						<Switch
							location={location}
							key={location.pathname}
						>
							<Route
								path="/"
								component={PersonalInfo}
								exact
							/>

							<Route
								path="/skills"
								component={SkillsPage}
							/>
						</Switch>
					</AnimatePresence>
				</div>
			</Container>
		</div>
	)
}

export default App
