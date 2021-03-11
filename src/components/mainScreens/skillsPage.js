import { Button, TextField } from "@material-ui/core"
import { motion } from "framer-motion"
import React, { useState } from "react"
import {
	Col,
	Container,
	Form,
	ListGroup,
	Row,
} from "react-bootstrap"
import { pageTransitionSkills } from "../../transitions"
import "../../style/style.scss"
import SkillCard from "../partsOfScreen/skillCard"

const SkillsPage = () => {
	const [skill, setSkill] = useState({})
	const [skills, setSkills] = useState([])

	const submitHandler = (e) => {
		e.preventDefault()
		setSkills([...skills, skill])
		setSkill({})
	}
	const saveAndShow = () => {
		if (skills.length !== 0) {
			console.log(skills.map((skill) => skill.text))
			console.log(skills)
		} else {
			alert("your skill-list is empty!")
		}
	}

	return (
		<motion.div
			className="page-container"
			variants={pageTransitionSkills}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<Container>
				<Row>
					<Form
						onSubmit={submitHandler}
						style={{ margin: "1rem" }}
					>
						<TextField
							label="Add new skill"
							variant="outlined"
							color="primary"
							size="small"
							value={skill.text ? skill.text : ""}
							onChange={(e) => {
								setSkill({
									text: e.target.value,
									id: Math.random() * 5000,
								})
							}}
						/>
						<Button
							type="submit"
							className="addButton"
							variant="contained"
							color="secondary"
						>
							<i className="far fa-plus-square"></i>
						</Button>
					</Form>
				</Row>
				<div style={{ minHeight: "8.1rem" }}>
					<ListGroup
						style={{
							maxWidth: "20rem",
						}}
					>
						{skills.map((s) => (
							<SkillCard
								key={s + Math.random()}
								s={s}
								skills={skills}
								setSkills={setSkills}
								setSkill={setSkill}
							/>
						))}
					</ListGroup>
				</div>
			</Container>
			<Row>
				<Col className="buttonContainer">
					<Button
						onClick={saveAndShow}
						variant="contained"
						color="secondary"
					>
						SAVE
					</Button>
				</Col>
			</Row>
		</motion.div>
	)
}

export default SkillsPage
