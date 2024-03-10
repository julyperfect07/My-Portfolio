import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"


const Header = () => {
  const [open, isOpen] = useState(false)
  console.log(open)
  return (
    <div className=' max-w-7xl py-6 px-3 flex justify-between items-center mx-auto'>
      <h1 className=' font-bold text-xl'>Abdallah.dev</h1>
      <div className=" flex flex-col justify-center items-center gap-1 sm:hidden">
        <Menu onClick={() => isOpen(prev => !prev)} className=" hover:cursor-pointer" />
        {open && (
          <div className=" max-w-96 p-3">
            <ul className=" flex flex-col gap-4 p-5 text-center">
              <li className=" hover:cursor-pointer w-full"> <a href="#home">Home</a></li>
              <li className=" hover:cursor-pointer w-full"> <a href="#about">About</a></li>
              <li className=" hover:cursor-pointer w-full"> <a href="#projects">Projects</a></li>
              <li className=" hover:cursor-pointer w-full"> <a href="#contact">Contact</a></li>
            </ul>
            <ModeToggle />
          </div>
        )}
        {/* <DropdownMenu >
          <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><a href="#home">Home</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#about">About</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#projects">Projects</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#contact">Contact</a></DropdownMenuItem>
            <DropdownMenuItem><ModeToggle /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className=' hidden sm:flex gap-3 items-center font-bold'>
        <ul className=" flex gap-4">
          <li className=" hover:cursor-pointer"> <a href="#home">Home</a></li>
          <li className=" hover:cursor-pointer"> <a href="#about">About</a></li>
          <li className=" hover:cursor-pointer"> <a href="#projects">Projects</a></li>
          <li className=" hover:cursor-pointer"> <a href="#contact">Contact</a></li>
        </ul>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header