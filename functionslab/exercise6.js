fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code

    const accumulator = completed.reduce( (total, todo, index, array) => {
        return {index: todo.userId}
    }, 0)
//    console.log(accumulator);
  })
  .catch(function(err) { 
    console.log(err);
  });