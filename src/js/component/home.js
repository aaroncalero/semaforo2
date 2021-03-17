//import React from "react";
import React, { useState } from "react";

export function Home() {
	var [clickedLight, setClicked] = useState(" ");
	let redClass = "";
	let yellowClass = "";
	let greenClass = "";
	if (clickedLight == "red") redClass = "select";
	if (clickedLight == "yellow") yellowClass = "select";
	if (clickedLight == "green") greenClass = "select";
	return (
		<div>
			<div id="cable"></div>
			<div id="container">
				<div
					className={"red ligth " + redClass}
					onClick={() => setClicked((clickedLight = "red"))}></div>
				<div
					className={"yellow ligth " + yellowClass}
					onClick={() => setClicked((clickedLight = "yellow"))}></div>
				<div
					className={"green ligth " + greenClass}
					onClick={() => setClicked((clickedLight = "green"))}></div>
			</div>
		</div>
	);
}
