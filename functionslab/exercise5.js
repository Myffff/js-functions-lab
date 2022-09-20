fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code

    const accumulator = completed.reduce( (accumu, todo, index, array) => {
        todo.completed? accumu : accumu.push({
            userId: todo.userId,
            title: todo.title
           })
        return accumu;
    }, [])
   console.log(accumulator);
  })
  .catch(function(err) { 
    console.log(err);
  });