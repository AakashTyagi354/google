import HeaderOption from "./HeaderOption";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchOutlinedIcon} title="All" selected />
        <HeaderOption Icon={ImageOutlinedIcon} title="Images" />
        <HeaderOption Icon={VideoLibraryOutlinedIcon} title="Videos" />
        <HeaderOption Icon={ArticleOutlinedIcon} title="News" />
        <HeaderOption Icon={AddLocationOutlinedIcon} title="Maps" />
        <HeaderOption Icon={MoreVertOutlinedIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
