function TodoList() {

const todos = [
{ id: 1, task: "Buy milk" },
{ id: 2, task: "Walk the dog" },
];



    return (
        <div>
            {todos.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}


export default TodoList;