import { useState } from "react";

// news context.
import { NewsContext } from "../contexts";

// custom hooks.
import useNewsQuery from "../hooks/useNewsQuery";

const NewsContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { news, loading } = useNewsQuery(category, searchTerm);

  const contextValue = {
    news,
    loading,
    category,
    searchTerm,
    setCategory,
    setSearchTerm,
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsContextProvider;
