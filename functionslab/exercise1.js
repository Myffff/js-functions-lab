fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     
    //  completed.forEach( (todo, index) => {
    //   console.log(`${todo.title} - ${todo.completed}`)
    // })

    const completed1 = completed.filter((todo, index) => {
        
        return todo.completed ==true;
      });
      console.log(completed1);
  })
  .catch(function(err) { 
    console.log(err);
  });