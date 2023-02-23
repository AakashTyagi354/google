import { useRouter } from "next/router";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Link from "next/link";

const PaginationBtns = () => {
  const router = useRouter();
  const startIdx = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between text-blue-700 mb-10 max-w-lg ">
      {startIdx >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIdx - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftOutlinedIcon  />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIdx + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightOutlinedIcon />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationBtns;
