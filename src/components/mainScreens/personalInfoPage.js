import { Button } from "@material-ui/core"
import { motion } from "framer-motion"
import React from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { pageTransitionPerson } from "../../transitions"

const PersonalInfoPage = () => {
	return (
		<motion.div
			className="page-container"
			variants={pageTransitionPerson}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<Form autoComplete="off">
				<Container>
					<Row style={{ paddingTop: "5%" }}>
						<Col sm={6}>
							<Form.Group
								className="my-3"
								style={{
									maxWidth: "13rem",
									margin: "auto",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
								}}
							>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="name"
									placeholder="Enter your name"
									style={{ maxWidth: "15rem" }}
								/>
							</Form.Group>
							<Form.Group
								style={{
									maxWidth: "13rem",
									margin: "auto",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
								}}
							>
								<Form.Label>Surname</Form.Label>
								<Form.Control
									style={{ maxWidth: "15rem" }}
									type="name"
									placeholder="Enter your surname"
								/>
							</Form.Group>
						</Col>
						<Col sm={6}>
							<Form.Group
								className="my-3"
								style={{
									maxWidth: "13rem",
									margin: "auto",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
								}}
							>
								<Form.Label>Occupation</Form.Label>
								<Form.Control
									as="select"
									style={{ maxWidth: "15rem" }}
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
				</Container>
				<Row>
					<Col className="buttonContainer">
						<Button variant="contained" color="secondary">
							SAVE
						</Button>
					</Col>
				</Row>
			</Form>
		</motion.div>
	)
}

export default PersonalInfoPage
