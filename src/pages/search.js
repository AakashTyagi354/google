import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Response from "../../Response";
import SearchResult from "../../components/SearchResult"
// import { API_KEY, CONTEXT_KEY } from "../../keys";
const Search = ({ results }) => {
    const router = useRouter()
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResult results={results}/>
    </div>
  );
};

export default Search;

// if we use getServerSideProps in this page then this page while be treated as a server side render page
// we can use context to get the url stuffs
//https://www.googleapis.com/customsearch/v1?${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response :  await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((res) => res.json());
  // after the server has render pass the result to the client
  return {
    props: {
      results: data,
    },
  };
}
