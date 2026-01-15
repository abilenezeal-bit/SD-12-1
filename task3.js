// Task 3: addUser(first_name, last_name, email)
export function addUser(nombre, apellido, email) {
  const url = "http://localhost:3000/users";
  const nuevoUsuario = {
    first_name: nombre,
    last_name: apellido,
    email: email
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoUsuario)
  })
  .then(response => {
    if (!response.ok) throw new Error("El servidor no respondió correctamente");
    return response.json();
  })
  .then(data => {
    console.log("¡Usuario agregado!");
    console.table(data); 
  })
  .catch(error => {
    console.error("Hubo un fallo:", error.message);
  });
}
