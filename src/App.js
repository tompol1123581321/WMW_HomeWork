import Header from "./components/partsOfScreen/header"
import PersonalInfo from "./components/mainScreens/personalInfoPage"
import SkillsPage from "./components/mainScreens/skillsPage"
import {
	useLocation,
	Route,
	Switch,
} from "react-router-dom"
import "./style/style.scss"
import { Container } from "@material-ui/core"
import { AnimatePresence } from "framer-motion"

function App() {
	const location = useLocation()
	return (
		<div className="wholePage">
			<Container maxWidth="md">
				<div className="wholeApp">
					<Header />
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
