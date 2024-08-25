const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
    <input  type="checkbox" name="" id="" />
    <p className="font-semibold">Todo  Title</p>
    <p>Time</p>
    <p>Description</p>
    <div className="space-x-4">
       <button>Edit</button>
       <button>Delete</button>
    </div>

 </div>
  );
};

export default TodoCard;
