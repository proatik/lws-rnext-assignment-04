import { useState, useEffect } from "react";

// base url of the api.
const baseUrl = "http://localhost:8000/v2";

const useNewsQuery = (category, searchTerm) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const isSearching = searchTerm.trim().length > 0;

  const fetchData = async () => {
    let url = `${baseUrl}/top-headlines?category=${category}`;

    if (isSearching) {
      url = `${baseUrl}/search?q=${searchTerm}`;
    }

    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (response.status === 200) {
        if (isSearching) setNews(data.result);
        else setNews(data.articles);
      } else {
        setError(data?.message);
      }
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, searchTerm]);

  return { loading, error, news };
};

export default useNewsQuery;
