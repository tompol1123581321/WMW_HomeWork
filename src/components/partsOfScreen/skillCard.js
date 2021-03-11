import { Button } from "@material-ui/core"
import React from "react"
import { ListGroupItem } from "react-bootstrap"

const SkillCard = ({ s, skills, setSkills, setSkill }) => {
	const deleteSkill = () => {
		const newSkills = skills.filter(
			(skill) => skill.id !== s.id
		)
		setSkills(newSkills)
	}
	const settingHandler = () => {
		setSkill(s)
		deleteSkill()
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
			<b>{s.text}</b>
			<div>
				<Button
					variant="contained"
					onClick={settingHandler}
				>
					<i className="fas fa-cog"></i>
				</Button>
				<Button onClick={deleteSkill} variant="contained">
					<i className="fas fa-trash-alt"></i>
				</Button>
			</div>
		</ListGroupItem>
	)
}

export default SkillCard
