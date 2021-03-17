import React from "react";

export default class luces extends React.Component {
	constructor() {
		super();
		this.state = { clickedLight: null };
	}

	render() {
		let redClass = "";
		if (this.state.clickedLight == "red") redClass = "select";
		let yellowClass = "";
		if (this.state.clickedLight == "yellow") yellowClass = "select";
		let greenClass = "";
		if (this.state.clickedLight == "green") greenClass = "select";
		return (
			<div>
				<div id="trafficTop"></div>
				<div id="container">
					<div
						className={"red ligth " + redClass}
						onClick={() =>
							this.setState({ clickedLight: "red" })
						}></div>
					<div
						className={"yellow ligth " + yellowClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}></div>
					<div
						className={"green ligth " + greenClass}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
