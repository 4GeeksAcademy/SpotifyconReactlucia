
import React, { useState, useEffect, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [canciones, setCanciones] = useState([])
	const [Index, setIndex] = useState([])
	console.log(canciones);
	console.log(Index);


	const inputElement = useRef();
	const nextElement = useRef();


	const focusInput = () => {


		inputElement.current.play();

		console.log(inputElement.current);

	};
	const focusNext = () => {
		nextElement.current.play();

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

	function SeleccionarCancion(url) {
		console.log(url)
		let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		inputElement.current.src = urlsong;
		//return urlsong
		// const audio = 
		// audio.play(url);

	}
	function next() {
		if (Index == 19) {
			inputElement.current.src = "https://assets.breatheco.de/apis/sound/" + canciones[0].url

			setIndex(1)
			inputElement.current.play()
		}
		// else (index < 20)
		// index + 1
		inputElement.current.src = "https://assets.breatheco.de/apis/sound/" + canciones[Index].url
		setIndex(Index + 1)
		inputElement.current.play()
		// let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		// let Next = urlsong[index]
		// nextElement.current.src = Next
		// nextElement.current.play();
		console.log(canciones[Index].url)
		console.log(Index)
	}
	function previus(url, index) {
		if (index >= 0)
			index - 1
		let urlsong = "https://assets.breatheco.de/apis/sound/" + url;
		let anterior = urlsong[index]
		inputElement.current.src = anterior
	}
	function ponerCancion(param) {
		focusInput()
		console.log("funcion")

	}
	function playNext() {
		next(focusNext())

		console.log("aaaaaaaaaaaaa")
	}



	function playSong() {
		canciones.forEach(setCanciones => {
			console.log(setCanciones)
		})
	}



	return (
		<div className="" style={{ width: "600px" }}>

			<ol className="text-left text-light fs-4 text lh-lg mx-3 position-absolute top-0 start-50 translate-middle-x bg-dark" style={{ width: "600px", paddingLeft: "100px" }}>
				{/* [<li>Morty Smith</li>,<li>Rick Sanchez</li> ] */}
				{canciones.map(function (item, index) { return <li key={item.id} onClick={function () { SeleccionarCancion(item.url) }}>{item.name}</li> })}
			</ol>
			<div className="d-flex justify-content-center bg-dark position-fixed bottom-0 start-50 translate-middle-x w-100 p-3">
				<button className=" bg-transparent border-0 mx-3" style={{ fontSize: "1.7rem", color: "white" }} onClick={previus}><i className="fas fa-backward" /></button>
				<audio ref={inputElement} src={focusInput}>

				</audio>
				<button className=" bg-transparent border-0 mx-3" style={{ fontSize: "1.7rem", color: "white" }} onClick={ponerCancion}><i className="fas fa-play" /> </button>
				<audio ref={inputElement} src={focusInput}>

				</audio>
				<button className=" bg-transparent border-0 mx-3" style={{ fontSize: "1.7rem", color: "white" }} onClick={next}><i className="fas fa-forward" /></button>
				<audio ref={inputElement} src={focusNext}>

				</audio>
			</div>
		</div>

	);
};

export default Home;