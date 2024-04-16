import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:7000/data");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/*       <BlogList blogs={blogs.filter((blog) => blog.author === "martin")} title="Martin's Blogs" /> */}
    </div>
  );
};

export default Home;
