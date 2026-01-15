// Task 2: listUsers()
export function listUsers() {
  const url = "http://localhost:3000/users";
  
  fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      console.log("Lista de usuarios:");
      console.table(data); 
    })
    .catch((error) => {
      console.error("¡Error al obtener usuarios!");
      console.log("Nombre del error:", error.name);
      console.log("Mensaje:", error.message);
    });
}
