import { ARTISTS } from "@/utils/artists";
import React, { useState, Dispatch, SetStateAction } from "react";
import { SingleValue } from "react-select";
import AsyncSelect from "react-select/async";

interface SearchProps {
  setArtist: Dispatch<SetStateAction<string>>;
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function Search({ setArtist, setQuery }: SearchProps) {
  const [artistValue, setArtistValue] = useState("");

  const handleChange = (
    selected: SingleValue<{ value: string; label: string }>
  ) => {
    setArtistValue(selected?.value || "");
  };

  const filterArtists = (inputValue: string) => {
    return ARTISTS.filter((i) =>
      i.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<typeof ARTISTS>((resolve) => {
      setTimeout(() => {
        resolve(filterArtists(inputValue));
      }, 1000);
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentValue = artistValue || ARTISTS[0].value;
    const formattedValue = currentValue.split(" ").join("+");
    setArtist(formattedValue);
    setQuery((e.currentTarget[1] as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <AsyncSelect
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "rgb(249 250 251)",
              borderRadius: "0",
              borderTopLeftRadius: "0.375rem",
              borderBottomLeftRadius: "0.375rem",
              marginRight: "4px",
              width: "200px",
            }),
            menu: (provided) => ({ ...provided, zIndex: 20 }),
          }}
          placeholder="Artists..."
          defaultOptions={ARTISTS}
          onChange={handleChange}
          loadOptions={promiseOptions}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "#f97316",
            },
          })}
          cacheOptions
        />
        <input
          type="search"
          id="search-dropdown"
          className="z-20 block w-full p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
          placeholder="Look for the title of your favorite artwork..."
        />
        <button
          type="submit"
          className="p-2 ml-1 text-sm font-medium text-white border bg-primary-700 rounded-r-md border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}
