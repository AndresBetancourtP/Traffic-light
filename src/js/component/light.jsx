import React, { useState } from "react";



//create your first component
const Light = () => {
	
	const [lightColor, setLightColor] = useState ('');
	

	return (
		<div>
			<div className=" container bg-dark" id="containerHolder"></div>
			<div className="container bg-dark py-4 d-flex flex-column justify-content-around align-items-center" id="container">
				<div className={`bg-danger circle ${lightColor === 'red' ? 'shine': ''}`}  onClick={() => setLightColor('red')}></div>
				<div className={`bg-warning circle ${lightColor === 'yellow' ? 'shine': ''}`}  onClick={() => setLightColor('yellow')}></div>
				<div className={`bg-success circle ${lightColor === 'green' ? 'shine': ''}`}  onClick={() => setLightColor('green')}></div>
			</div>
		</div>
	);
};

export default Light;
