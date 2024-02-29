import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Home() {
  const url = "http://localhost:3000/news";
  console.log(url);
  const { data } = useFetch(url);

  return (
    <div className="pt-[30px] mb-[30px] container flex flex-col gap-5">
      {data &&
        data.map((item: any) => {
          console.log(item);
          return (
            <div key={item.id}>
              <Link
                className="card lg:card-side bg-base-100 shadow-xl w-full"
                to="/news"
              >
                <figure className="md:mr-[80px]">
                  <img
                    className="md:w-[600px] md:h-[500px] w-[375px] h-[250px]"
                    src={item.images}
                    alt="Album"
                  />
                </figure>
                <div className="flex flex-col items-center pt-4 text-center">
                  <h2 className="text-center md:font-bold md:text-xl  md:w-[400px] w-[300px]">
                    {item.title}
                  </h2>
                  <p className="md:font-normal md:text-base text-center w-[300px] md:w-[400px]">
                    {item.description}
                  </p>
                  <p className="md:font-bold md:text-xl font-medium text-base">
                    {item.author}
                  </p>
                  <p className="md:font-bold md:text-lg font-medium text-base">
                    {item.postedAt}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
