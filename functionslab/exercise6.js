fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed1 = json.reduce( (accumu, todo, index, array) => {
        const currAccumu= accumu[todo.userId] ? accumu[todo.userId]: 0
        return {
            ...accumu,
            [todo.userId]:currAccumu + todo.completed
        }
    }, {})
   console.log(completed1);
  })
  .catch(function(err) { 
    console.log(err);
  });