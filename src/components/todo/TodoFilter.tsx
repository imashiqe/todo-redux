import { useState } from "react";
import { Button } from "../ui/button";
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuContent,DropdownMenuLabel, DropdownMenuSeparator,DropdownMenuRadioItem, DropdownMenuRadioGroup} from "../ui/dropdown-menu";

const TodoFilter = () => {
    const [position, setPosition] =  useState('bottom');
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by Piority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;