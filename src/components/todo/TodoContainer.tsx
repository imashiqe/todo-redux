const TodoContainer = () => {
    return (
        <div>
           <div>
             <button>Add Todo</button>
             <button>Filter</button>
           </div>
           <div className="bg-red-500 w-full h-[500px] rounded-xl p-5">
              <div className="bg-white rounded-md flex justify-between items-center p-3">
                 <input  type="checkbox" name="" id="" />
                 <p>Todo  Title</p>
                 <p>Time</p>
                 <p>Description</p>
                 <div>
                    <button>Edit</button>
                    <button>Delete</button>
                 </div>

              </div>
           </div>
        </div>
    );
};

export default TodoContainer;