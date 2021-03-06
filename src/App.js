import Header from "./components/partsOfScreen/header"
import PersonalInfo from "./components/mainScreens/personalInfoPage"
import SkillsPage from "./components/mainScreens/skillsPage"
import {
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom"
import "./style/style.scss"
import { Container } from "@material-ui/core"

function App() {
	return (
		<div className="wholePage">
			<Container maxWidth="md">
				<div className="wholeApp">
					<Router>
						<Header />
						<Switch>
							<Route path="/" exact>
								<PersonalInfo />
							</Route>
							<Route path="/skills">
								<SkillsPage />
							</Route>
						</Switch>
					</Router>
				</div>
			</Container>
		</div>
	)
}

export default App
