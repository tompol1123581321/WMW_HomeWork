import { Button, TextField } from "@material-ui/core"
import { motion } from "framer-motion"
import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { pageTransitionSkills } from "../../transitions"
import "../../style/style.scss"

const SkillsPage = () => {
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
					<div className="addingSkills">
						<TextField
							id="outlined-basic"
							label="Skills"
							variant="outlined"
						/>
						<Button variant="contained" color="secondary">
							<i class="far fa-plus-square"></i>
						</Button>
					</div>
				</Row>
				<Row style={{ minHeight: "15rem" }}>
					<Col>
						<Card>
							<Card.Body>Skill number 1</Card.Body>
						</Card>
						<Card>
							<Card.Body>Skill number 1</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</motion.div>
	)
}

export default SkillsPage
