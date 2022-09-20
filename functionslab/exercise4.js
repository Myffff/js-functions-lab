fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     
    //  completed.forEach( (todo, index) => {
    //   console.log(`${todo.title} - ${todo.completed}`)
    // })

    const Total = completed.reduce( (total, todo, index, array) => {
        return total + todo.completed
    }, 0)
   console.log(`total completed todos =  ${Total}`);
  })
  .catch(function(err) { 
    console.log(err);
  });