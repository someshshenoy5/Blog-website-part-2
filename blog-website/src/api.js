import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/blogs';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error('Failed to fetch blogs');
  }
};

export const fetchBlogById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    throw new Error('Failed to fetch blog');
  }
};
