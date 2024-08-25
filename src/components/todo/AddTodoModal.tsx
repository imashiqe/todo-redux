import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger,DialogHeader, DialogDescription,DialogTitle,DialogFooter,DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


const AddTodoModal = () => {
    return (
        <Dialog>
      <DialogTrigger asChild>
           <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    );

}

export default AddTodoModal;