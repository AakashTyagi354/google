import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searhInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searhInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
          defaultValue={router.query.term}
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searhInputRef}
          />
          <ClearOutlinedIcon
            className=" sm:mr-4 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125
    
        "
            onClick={() => (searhInputRef.current.value = "")}
          />
          <MicOutlinedIcon className="mr-3 hidden sm:inline-flex text-blue-500 border-l-2  border-gray-300 " />
          <SearchOutlinedIcon className="text-blue-500 hidden sm:inline-flex" />

          {/* when we are inside form and we give btn type submite then when we hit enter key this button will hit */}

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto mt-1" url="https://media.licdn.com/dms/image/C4D03AQFDNID_w_QTSg/profile-displayphoto-shrink_400_400/0/1658772187627?e=1682553600&v=beta&t=Enb-gKKbQCLSqnWTdKKzfUjjrRHToBlaAGWdjYl--bc"/>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
