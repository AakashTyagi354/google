import PaginationBtns from "./PaginationBtns";

const SearchResult = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime})
      </p>
      {results.items?.map((res) => (
        <div key={res.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={res.link} className="text-sml">
              {res.formattedUrl}
            </a>
            <a href={res.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {res.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{res.snippet}</p>
        </div>
      ))}
      <PaginationBtns/>
    </div>
  );
};

export default SearchResult;
