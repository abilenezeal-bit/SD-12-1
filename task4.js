// Task 4: delUser(number)
export function delUser(id) {
  const url = `http://localhost:3000/users/${id}`

  fetch(url, {
    method: 'DELETE' 
  })
  .then(response => {
    if (response.ok) console.log(`Usuario ${id} eliminado.`);
  })
  .catch(error => console.error("Error al borrar:", error.message));
}
