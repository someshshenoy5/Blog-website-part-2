import { createContext, useState, useEffect } from "react";
import { fetchBlogs, fetchBlogById } from "./api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isError, setError] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
        setError(false);
      } catch (error) {
        setError(true); 
      }
    };
    fetchBlogsData();
  }, []);

  const getBlogById = async (id) => {
    try {
      const blog = await fetchBlogById(id);
      setSelectedBlog(blog);
      setError(false); 
    } catch (error) {
      setError(true); 
    }
  };

  return (
    <AppContext.Provider value={{ blogs, isError, getBlogById, selectedBlog }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
