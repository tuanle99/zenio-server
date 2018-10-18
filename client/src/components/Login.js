import React, { Component } from "react"
import { connect } from "react-redux"
import { authUser } from "../redux/actions/auth"
import { removeError } from "../redux/actions/errors"
import "./styles/login.css"

class Login extends Component {
	state = {
		name: "",
		pass: ""
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleToggleForm = () => {
		this.props.history.push("/signup")
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	render() {
		const { name, pass } = this.state

		return (
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					<input
						name="name"
						vlaue={name}
						type="text"
						placeholder="Username"
						onChange={this.handleChange}
					/>
					<input
						name="pass"
						value={pass}
						type="password"
						placeholder="Password"
						onChange={this.handleChange}
					/>
					<button>login</button>
					<p className="message">
						Not registered?{" "}
						<span className="link" onClick={this.handleToggleForm}>
							<strong>Create an account</strong>
						</span>
					</p>
				</form>
			</div>
		)
	}
}

export default connect(
	({ errors }) => ({ errors }),
	{ authUser, removeError }
)(Login)
