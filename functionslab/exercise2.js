fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     const complete = completed.map( todo => {
        return todo.title
      });
      console.log(complete);
  })
  .catch(function(err) { 
    console.log(err);
  });