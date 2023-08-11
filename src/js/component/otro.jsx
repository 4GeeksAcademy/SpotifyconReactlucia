import React, {useState, useEffect} from "react";//1. importar el hook useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

// [espacio de memoria,funcion que actualiza el espacio de memoria]   <= return
	// const [state,setState]=useState("")//2. ejecutamos el useState

	//REACT
	const [count,setCount]=useState(0)//1.DECLARANDO EL ESPACIO DE MEMORIA
	const [text,setText]=useState("Seguir")
	const [personajes,setPersonajes]=useState([])
console.log(personajes);

	//JS
	let nombre = "rosinni" //1. declarar un espacio de memoria con un dato
	nombre = "Maria"// 2. actualizamos la variable


	function handleCount() {
		if (count === 0) {
			//bloque de codigo que quiero que se ejecute
			setCount(count+1)//2. ACTUALIZAMOS LA VARIABLE
			setText("Siguiendo")
		} else {
			setCount(count-1)//2. ACTUALIZAMOS LA VARIABLE
			setText("Seguir")
		}
	}

	function bienvenida() {
		alert("Bienvenido a la app")
	}

	function notificacion() {
		alert("Un nuevo usuario te ha seguido")
	}

	function obtenerInfo() {
		fetch('https://rickandmortyapi.com/api/character')//especificamos la url donde vamos a buscar info
		.then((response)=>response.json()) // la info que llega la voy a convertir en un formato json
		.then((data)=>setPersonajes(data.results))// convierte la info en un objeto, para que lo procesemos como queramos
		.catch((error)=>console.log(error))// si hay un error me muestra cual fue

	}


	// useEffect(funcion anonima,array vacio)
	 useEffect(function () {// onload => ejecutar codigo ni bien cargue el componente
	//bloque de codigo que queremos ejecutar
    //   bienvenida();
		obtenerInfo()
	 },[])

	 useEffect(function () {// observador de estado => ejecutar codigo si un estado que vigilemos cambia el componente
		//bloque de codigo que queremos ejecutar
		if (count !=0) {
			notificacion();
		}
		 },[count])

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Seguidores {count}</h1>
			<p>
				<img src={rigoImage} />
			</p>
			                    {/*EN HTML ERA ASI =====> onclick="nombreFuncion()" */}
			<button href="#" className="btn btn-success"  onClick={handleCount}>
				{text} <i class="fa fa-arrow-right"></i>
			</button>
			<ul>
				{/* [<li>Morty Smith</li>,<li>Rick Sanchez</li> ] */}
				{personajes.map(function(item,index){return <li key={item.id}>{item.name}</li>})}
				{/* <li>item 1</li>
				<li>item 2</li>
				<li>item 3</li> */}
			</ul>
		</div>
	);
};

export default Home;