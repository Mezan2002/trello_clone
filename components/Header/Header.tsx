import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row bg-gray-500/10 shadow rounded-b-2xl items-center justify-between w-full py-2 px-5">
        <div className="">
          <div className="w-full absolute h-96 top-0 left-0 bg-gradient-to-br from-indigo-600 to-cyan-600 filter blur-3xl opacity-50 -z-10" />
          {/* logo start */}
          <Image
            src="https://links.papareact.com/c2cdd5"
            alt="Trello Logo"
            width={300}
            height={100}
            className="w-44 md:w-56 pb-5 md:pb-0 object-contain"
          />
          {/* logo end */}
        </div>
        <div className="flex items-center w-4/12 space-x-4">
          {/* search bar start */}
          <form className="flex items-center flex-1 space-x-5 justify-end md:flex-initial shadow border border-gray-200 bg-white rounded-xl py-1 px-3 w-full">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 -mr-5" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2 ml-0"
            />
            <button className="hidden" type="submit">
              Search
            </button>
          </form>
          {/* search bar end */}

          {/* avatar start */}
          <p>
            <Image
              src="https://i.ibb.co/CWsBhPd/Ginny-cartoon-of-the-boy-ed332e23-e047-4282-84ec-54cd9fa91f0e.png"
              alt="Users Avatar"
              width={100}
              height={100}
              className="h-[50px] w-[50px] rounded-full object-cover object-center"
            />
          </p>
          {/* avatar end */}
        </div>
      </div>
      {/* notification start */}
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="text-[#0055d1] flext items-center justify-center text-sm font-light p-4 w-fit shadow-xl rounded-xl bg-white italic max-w-3xl">
          <UserCircleIcon className="h-10 w-10 inline-block mr-1 text-[#0055d1]" />
          GPT is loading and it will give a AI related data...
        </p>
      </div>
      {/* notification end */}
    </header>
  );
};

export default Header;
