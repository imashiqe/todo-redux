import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger,DialogHeader, DialogDescription,DialogTitle,DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../redux/features/hooks";


const AddTodoModal = () => {
     const  [task, setTask] = useState('');
     const  [description, setDescription] = useState('');
     const dispatch = useAppDispatch();
     const  onSubmit = (e: FormEvent) =>{
         e.preventDefault();
     }
     dispatch({task, description});
    return (
        <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
      </DialogTrigger>
     
      <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
           Add  Your Task That  You  Want To Do
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
             Task
            </Label>
            <Input
            onBlur= {(e) => setTask(e.target.value)}
              id="task"
              defaultValue="Add Your Task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
                onBlur= {(e) => setDescription(e.target.value)}
              defaultValue="Add Your Description"
              className="col-span-3"
            />
          </div>
        </div>
           <div className="flex justify-end">
            <DialogClose asChild>
            <Button type="submit">Save changes</Button>
                </DialogClose >
         
          </div>
        </form>
      </DialogContent>
        
    </Dialog>
    );

}

export default AddTodoModal;