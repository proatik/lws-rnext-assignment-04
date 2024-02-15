import { useState, useEffect, useCallback, useContext } from "react";

// icons/images.
import LwsLogo from "../assets/logo.png";
import GlobeIcon from "../assets/icons/globe.svg";
import SearchIcon from "../assets/icons/search.svg";

// news context.
import { NewsContext } from "../contexts";

// utility functions.
import debounce from "../utils/debounce";
import currentDate from "../utils/currentDate";

// navigation items.
const categories = [
  { id: 1, name: "general", label: "General" },
  { id: 2, name: "business", label: "Business" },
  { id: 3, name: "entertainment", label: "Entertainment" },
  { id: 4, name: "health", label: "Health" },
  { id: 5, name: "science", label: "Science" },
  { id: 6, name: "technology", label: "Technology" },
  { id: 7, name: "sports", label: "Sports" },
];

const SearchBox = () => {
  const [value, setValue] = useState("");
  const { category, setSearchTerm } = useContext(NewsContext);

  const debouncedSearch = useCallback(
    debounce((keyword) => {
      setSearchTerm(keyword);
    }, 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    debouncedSearch(value);
  }, [value]);

  useEffect(() => {
    return () => {
      setValue("");
      setSearchTerm("");
    };
  }, [category]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex items-center w-full justify-between gap-1 overflow-hidden rounded-[25px] border p-0.5 text-gray-50 md:min-w-[180px] lg:min-w-[200px]">
        <input
          value={value}
          type="search"
          onChange={handleChange}
          placeholder="Search news"
          className="z-20 block flex-grow rounded-[25px] py-1 px-4 pr-2 text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-neutral-800"
        >
          <img src={SearchIcon} alt="Search Icon" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

const Header = () => {
  const { category, setCategory } = useContext(NewsContext);

  return (
    <nav className="py-6 border-b border-black md:py-8">
      <div className="container flex flex-wrap items-center justify-between gap-6 mx-auto">
        <div className="flex items-center space-x-4">
          <img src={GlobeIcon} alt="Glove Icon" />
          <span>{currentDate()}</span>
        </div>

        <a href="/">
          <img
            src={LwsLogo}
            alt="Lws Logo"
            className="max-w-[100px] md:max-w-[165px]"
          />
        </a>

        <div className="flex items-center justify-center w-full space-x-3 md:w-fit lg:space-x-8">
          <SearchBox />
        </div>
      </div>

      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {categories.map(({ id, name, label }) => (
            <li key={id} onClick={() => setCategory(name)}>
              <a className={category === name ? "selected" : ""} href="#">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
