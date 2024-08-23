import TodoContainer from "../components/todo/TodoCard";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
