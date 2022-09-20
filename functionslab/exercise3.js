fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     
    //  completed.forEach( (todo, index) => {
    //   console.log(`${todo.title} - ${todo.completed}`)
    // })

    const uncompleted = completed.filter((todo, index) => {
        
        return todo.completed ==false;
      }).map(todo => {
        
        // return todo.completed ==false;

        return {
            userId: todo.userId,
            title: todo.title,
          };
      });
      console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });