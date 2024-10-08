import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    return (
        <div>
           <div className="flex justify-between mb-5">
            <AddTodoModal/>
             <TodoFilter/>
           </div>
           <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-5">
             <TodoCard/>
             <TodoCard/>
             <TodoCard/>
             <TodoCard/>
             <TodoCard/>
              {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
                <p>There Is  no  task  pending</p>{''}
                </div> */}
           </div>
        </div>
    );
};

export default TodoContainer;