//DOM
//querySelector solo devuelve un elemento aunque existen muchos
//querySelectorAll busca todos los elementos que cumplan con el criterio de busqueda

/*let links = document.querySelectorAll("a");
links.forEach(function(link){
console.log("link");
});*/

/*let container = document.querySelector(".container");
console.log(container);*/





//Obtener los elemntos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

//Agregar un evento click a cada unos de ellos

link.addEventListener("click",function(ev){
	ev.preventDefault();
	let content = document.querySelector('.content');

//Quitarle las clases de animacion que ya tiene

	content.classList.remove("animate__fadeInDown");
	content.classList.remove("animate__animated");

//Agregar clases para animar su salida

	content.classList.add("animate__fadeOutUp");
	content.classList.add("animate__animated");
	setTimeout(function(){
	location.href="/boletines";	
},600);
	
return false;
	});
});
