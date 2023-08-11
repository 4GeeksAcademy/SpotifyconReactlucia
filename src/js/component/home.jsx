// import { useState, useEffect } from "react";


// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {



// 	const [canciones, setCanciones] = useState([])
// 	console.log(canciones);


// function obtenerCanciones() {
// 	fetch('https://rickandmortyapi.com/api/character')
// 		.then((response) => response.json())
// 		.then((data) => setCanciones(data.results))
// 		.catch((error) => console.log(error))
// }

// 	useEffect(function () {
// 		obtenerCanciones()
// 	}, [])

// 	return (
// 		<div className="text-center">
// 			<ul>
// 				{canciones.map(function (item) { return <li>{item.name}</li> })}
// 			</ul>
// 		</div>
// 	);
// };

// export default Home;





import React, { useState, useEffect, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [canciones, setCanciones] = useState([])
	console.log(canciones);


	const inputElement = useRef();
	const nextElement = useRef();


	const focusInput = () => {

		inputElement.current.play();
		console.log(inputElement.current);

	};
	const focusNext = () => {
		nextElement.curret.play();
	}



	function obtenerCanciones() {
		fetch('https://playground.4geeks.com/apis/fake/sound/all')
			.then((response) => response.json())
			.then((data) => setCanciones(data.sound))
			.catch((error) => console.log(error))// si hay un error me muestra cual fue

	}


	useEffect(function () {
		obtenerCanciones()
	}, [])

	function SeleccionarCancion(url, index) {
		console.log(url)
		let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		inputElement.current.src = urlsong;
		//return urlsong
		// const audio = 
		// audio.play(url);

	}
	function next(url, index) {
		if (index == [19])
			index == [0]
		else (index < [20])
		index + 1
		let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		let Next = index + urlsong
		nextElement.current.src = Next
	}
	function previus(url, index) {
		if (index >= 0)
			index - 1
		let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		let anterior = index + urlsong
		inputElement.current.src = anterior
	}
	function ponerCancion(param) {
		focusInput()
		console.log("funcion")

	}


	return (
		<div className="" style={{ width: "600px" }}>

			<ol className="text-left text-light fs-4 text lh-lg mx-3 position-absolute top-0 start-50 translate-middle-x bg-dark" style={{ width: "600px" }}>
				{/* [<li>Morty Smith</li>,<li>Rick Sanchez</li> ] */}
				{canciones.map(function (item, index) { return <li key={item.id} style={{ textDecoration: "underline" }} onClick={function () { SeleccionarCancion(item.url) }}>{item.name}</li> })}
			</ol>
			<div className="bg-dark position-fixed bottom-0 start-50 translate-middle-x w-100 p-3">
				<button className="" onClick={ponerCancion}>anterior</button>
				<audio ref={inputElement} src={focusInput}>

				</audio>
				<button className="" onClick={ponerCancion}>play</button>
				<audio ref={inputElement} src={focusInput}>

				</audio>
				<button className="" onClick={ponerCancion}>next</button>
				<audio ref={inputElement} src={focusNext}>

				</audio>
			</div>
		</div>

	);
};

export default Home;