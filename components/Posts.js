import { createClient } from "next-sanity";

export default function Posts() {
  return (
    <div className="">
      <div className="page-posts">
        <h2 className="">Updates</h2>
      </div>
      <div className="featured-top">
        <div className="page-posts-header text-3xl">
          <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
        </div>
        <div className="w-12 text-sm">
          <p>
            This Monday, October 2nd, 2023, a tree plantation drive was held at
            Raleigh, NC, to contribute to the Sri Sathya Sai Prematharu
            Initiative. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
}

// const client = createClient({
//   projectId: "q3l6fjpi",
//   dataset: "production",
//   apiVersion: "2023-10-04",
//   useCdn: false,
// });

// export async function getStaticProps() {
//   const posts = await client.fetch(`*[_type == "post"]`);

//   return {
//     props: {
//       posts,
//     },
//   };
// }
