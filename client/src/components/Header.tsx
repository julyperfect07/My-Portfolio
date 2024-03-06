import { ModeToggle } from "./mode-toggle"


const Header = () => {
  return (
    <div className=' max-w-7xl py-6 px-3 flex justify-between items-center mx-auto'>
      <h1 className=' font-bold text-xl'>Abdallah.dev</h1>
      <div className=' flex gap-3 items-center font-bold'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header