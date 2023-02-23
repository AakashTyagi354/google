import Avatar from "components/Avatar";
import Head from "next/head";
import AppsIcon from "@mui/icons-material/Apps";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import Footer from "components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null) // for taking the value form input field
  const router = useRouter();
  // redirecting to different page 
  const search =(e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    console.log(term);
    if(!term) return;
   
    router.push(`/search?term=${term}`);

   
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>

        {/* <link rel="icon" href="/favicon.ico" />  --> change the icons later*/}
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <AppsIcon className="text-lg  hover:bg-gray-200 cursor-pointer" />
          <Avatar url="https://media.licdn.com/dms/image/C4D03AQFDNID_w_QTSg/profile-displayphoto-shrink_400_400/0/1658772187627?e=1682553600&v=beta&t=Enb-gKKbQCLSqnWTdKKzfUjjrRHToBlaAGWdjYl--bc" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-40 flex-grow w-4/5 ">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl
        lg:max-w-2xl "
        >
          <SearchIcon className="mr-3 text-gray-500 " />
          <input  ref={searchInputRef} type="text" className="flex-grow focus:outline-none " />
          <MicOutlinedIcon className="text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2  justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I'am Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
