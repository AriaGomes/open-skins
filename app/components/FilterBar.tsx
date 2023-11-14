import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch as setSearchfilter } from "../redux/filterSlice";
// TODO: save filters to redux store and filter out data, include more than just a search
// TODO: different filters depending on the page used
// TODO: add to more than just skins page

export const FilterBar = (props: any) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchfilter(search));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [dispatch, search]);

  return (
    <div className={`  h-10 rounded-md bg-transparent pt-2 z-20 top-0 sticky`}>
      <div className=" mx-2 bg-white">
        <input
          className="w-full"
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
    </div>
  );
};
