import { Button, TextField } from "@material-ui/core"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { pageTransitionSkills } from "../../transitions"
import "../../style/style.scss"

const SkillsPage = () => {
	const [skill, setSkill] = useState()
	const [skills, setSkills] = useState([])

	const submitHandler = (e) => {
		e.preventDefault()
		setSkills([...skills, skill])
		setSkill("")
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
							label="Skills"
							variant="outlined"
							color="primary"
							size="small"
							value={skill}
							onChange={(e) => {
								setSkill(e.target.value)
							}}
						/>
						<Button
							type="submit"
							className="addButton"
							variant="contained"
							color="secondary"
						>
							<i class="far fa-plus-square"></i>
						</Button>
					</Form>
				</Row>

				<Row style={{ minHeight: "15rem" }}>
					<Col>{skills}</Col>
				</Row>
			</Container>
		</motion.div>
	)
}

export default SkillsPage
