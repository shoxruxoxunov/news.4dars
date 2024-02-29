// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// async function getData(url: string) {
//   const req = await fetch(url);
//   const news = await req.json();
//   return news;
// }
// function News() {
//   const { id } = useParams();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData("http://localhost:3000/news" + id);
//         setData(result);
//         console.log(result);
//       } catch (error) {
//         console.error("Error ", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return (
//             <div key={id}>
//               <div>
//                 <img src={item.images} alt="" />
//               </div>
//             </div>
//           );
//         })}
//     </>
//   );
// }
// export default News;
