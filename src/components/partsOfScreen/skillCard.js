import { Button } from "@material-ui/core"
import React from "react"
import { ListGroupItem } from "react-bootstrap"

const SkillCard = ({ s, skills, setSkills }) => {
	const deleteSkill = () => {
		const newSkills = skills.filter(
			(skill) => skill.id !== s.id
		)
		setSkills(newSkills)
	}
	return (
		<ListGroupItem
			style={{
				maxHeight: "2rem",
				minWidth: "18rem",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0",
			}}
		>
			<b style={{ paddingLeft: "0.4rem" }}>{s.text}</b>
			<Button onClick={deleteSkill} variant="contained">
				<i className="fas fa-trash-alt"></i>
			</Button>
		</ListGroupItem>
	)
}

export default SkillCard
