import { Button } from "@material-ui/core"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { pageTransitionPerson } from "../../transitions"

const PersonalInfoPage = () => {
	const ocupations = useSelector(
		(state) => state.ocupations
	)

	const [name, setName] = useState("")
	const [surname, setSurname] = useState("")
	const [ocupation, setOcupation] = useState(
		ocupations[0].name
	)

	const nameChangeHandler = (e) => {
		setName(e.target.value)
	}
	const surnameChangeHandler = (e) => {
		setSurname(e.target.value)
	}
	const ocupationChangeHandler = (e) => {
		setOcupation(e.target.value)
	}
	return (
		<motion.div
			className="page-container"
			variants={pageTransitionPerson}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<Form
				onSubmit={(e) => {
					e.preventDefault()
					console.log([
						{
							firstName: name,
							lastName: surname,
							ocupation: ocupation,
						},
					])
				}}
				autoComplete="off"
			>
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
									value={name}
									onChange={nameChangeHandler}
									type="name"
									placeholder="Enter your name"
									style={{ maxWidth: "15rem" }}
									required={true}
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
									value={surname}
									onChange={surnameChangeHandler}
									style={{ maxWidth: "15rem" }}
									type="name"
									placeholder="Enter your surname"
									required={true}
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
									onChange={ocupationChangeHandler}
									as="select"
									style={{ maxWidth: "15rem" }}
									required={true}
								>
									{ocupations.map((o) => (
										<option value={o.name} key={o.name + 1}>
											{o.code}
										</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
				</Container>
				<Row>
					<Col className="buttonContainer">
						<Button
							type="submit"
							variant="contained"
							color="secondary"
						>
							SAVE
						</Button>
					</Col>
				</Row>
			</Form>
		</motion.div>
	)
}

export default PersonalInfoPage
