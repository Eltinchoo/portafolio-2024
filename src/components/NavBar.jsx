import { BsDice3Fill } from "react-icons/ai";
export default function NavBar() {
  return (
    <header >
    {/** 
      <ul className="lg:p-8 flex justify-around  font-normal p-3 text-lg ">
      <div>
        <li className="text-orange-500">LOGO</li>
      </div>
      <div className="flex flex-row gap-10">
        <li className="text-white hover:text- hover:bg-orange-400  cursor-pointer">Home</li>
        <li className="text-white hover:text- hover:bg-orange-400  cursor-pointer">About Me</li>
        <li className="text-white hover:text- hover:bg-orange-400  cursor-pointer">Portfolio</li>
        <li className="text-white hover:text- hover:bg-orange-400  cursor-pointer">Contact</li>
        </div>
      </ul>
      */}
 
  


  

<nav className="">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src=<BsDice3Fill /> className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <li>
          <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0  text-orange-500 hover:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0  text-orange-500 hover:text-white" aria-current="page">About me</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0  text-orange-500 hover:text-white" aria-current="page">Portfolio</a>
        </li>
      
        <li>
          <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0  text-orange-500 hover:text-white" aria-current="page">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</header>
);
}
