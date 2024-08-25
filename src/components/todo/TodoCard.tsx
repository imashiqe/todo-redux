import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
    <input  type="checkbox" name="" id="" />
    <p className="font-semibold">Todo  Title</p>
    <p>Time</p>
    <p>Description</p>
    <div className="space-x-4">
  
       <Button>Edit</Button>
       <Button className="bg-red-500">Delete</Button>
    </div>

 </div>
  );
};

export default TodoCard;
