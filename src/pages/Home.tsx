import useFetch from "../hooks/useFetch";

function Home() {
  const url = "http://localhost:3000/news";
  console.log(url);
  const { data } = useFetch(url);
  console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => {
          console.log(item);
          return <div></div>;
        })}
    </div>
  );
}

export default Home;
