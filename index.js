
//EJERCICIO 01  1.- Declara una funcion getAllBreeds que devuelva un array de strings 
//con todas las razas de perro.
function getAllBreeds() {
  let breeds = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => Object.keys(data.message));
  return breeds;
}


//EJERCICIO 02 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.
function getRandomDog() {
  let randoms = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => data.message);
  return randoms;
}

getRandomDog();

//EJERCICIO 03.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de la raza komondor.

function getAllImagesByBreed() {
  let imagesByBreed = fetch('https://dog.ceo/api/breed/komondor/images')
    .then(res => res.json())
    .then(data => data.message);
  return imagesByBreed;
}

getAllImagesByBreed();

//EJERCICIO 04 - Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento

function getAllImagesByBreed2(breed) {
  let imagesByBreed2 = fetch(`https://dog.ceo/api/breed/${breed}/images`)  //Template string para realizar busqueda del parámetro ${}
    .then(res => res.json())
    .then(data => data.message);
  return imagesByBreed2;
}

getAllImagesByBreed2();



//5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github
// a partir de su nombre de usuario. (https://api.github.com/users/{username}).

function getGitHubUserProfile(username) {
  const url = `https://api.github.com/users/${username}`;
  let result = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let nameUsuario = data;
      return nameUsuario;
    })
    .catch((error) => {
      return;
    });
  return result;
}
console.log(
  getGitHubUserProfile("alenriquez96").then((perfil) => {
    console.log(perfil.name);
  })
);

//6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un
//usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

function printGithubUserProfile(username) {
  const result = getGitHubUserProfile(username)
    .then(data => {
      let img = data.avatar_url1;
      let name = data.name;

      // pintar en el DOM (hecho al final)

      return { img, name };
    })
    .catch((error) => {
      return;
    });
  return result;
}

//llamo a la función , le paso el nombre del usuario y devuelve una promesa, y ese then es cunado la variable funcione se pinte
printGithubUserProfile("alenriquez96").then((usuario) => {
  const imgElement = document.createElement("img");
  imgElement.src = usuario.img;
  imgElement.alt = `Avatar de ${usuario.name}`;

  const nameElement = document.createElement("h3");
  nameElement.textContent = usuario.name;

  const container = document.getElementById("ejercicio 6");
  container.innerHTML = "";
  container.appendChild(imgElement);
  container.appendChild(nameElement);

  console.log(usuario.img);
});


//7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la
// API para obtener información de ese usuario y devuelva un string que represente
//una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:


//modificar

function getAndPrintGitHubUserProfile(username) {
  let perfil = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {

      // Esto es para el ejercicio 8 (quitar y hacer el 8 con innerHTML)
      let section = document.createElement('section');

      let img = document.createElement('img');
      img.setAttribute('src', data.avatar_url);
      img.setAttribute('alt', "imagen de usuario");

      let h1 = document.createElement('h1');
      h1.textContent = data.name;

      let p = document.createElement('p');
      p.textContent = `Public repos: (${data.public_repos})`

      document.body.appendChild(section);
      section.appendChild(img);
      section.appendChild(h1);
      section.appendChild(p);

      return `
                <section>
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>
            `

    })
    .catch(err => console.log("MENSAJE DE ERROR: " + err.message));

  return perfil;
}



// Cargar el DOM antes para hacer el último ejercicio
document.addEventListener('DOMContentLoaded', function () {
  // 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá 
  //en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función 
  //getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón buscar.
  //(Esto no se testea).

  let btnBuscar = document.querySelector("#buscar");
  btnBuscar.addEventListener('click', function () {
    const username = document.querySelector("#username").value;

    if (username) {
      // Poner then y innerHTML += ...
      getAndPrintGitHubUserProfile(username);
    } else {
      alert("Ingresa un nombre de usuario, por favor");
    }
  })

});


//9.- ada una lista de usuarios de github guardada en una array,crea una funcion 
//fetchGithubUsersD(userNames) que utilice 'https://api.github.com/users/${name}' 
//para obtener el nombre de cada usuario.
//Objetivo: Usar Promise.all()
//Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
//Pregunta. ¿cuántas promesas tendremos?
//Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

function fetchGithubUsers(userNames) {

//promise.all
  //userNames.map(userNames) => fetch('https://api.github.com/users/${name}')
   // .then(res => res.json())
   // .then(data => console.log(data.name))


}



//fetchGithubUsers
