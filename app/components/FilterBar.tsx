import { useAppSelector } from "../hooks";
// TODO: save filters to redux store and filter out data, include more than just a search
// TODO: different filters depending on the page used
// TODO: add to more than just skins page
export const FilterBar = (sidebarOpen: any) => {
  return (
    <div className={`  h-10 rounded-md bg-transparent pt-2 z-20 top-0 sticky`}>
      <div className=" mx-2 bg-white">
        <input className="w-full" />
      </div>
    </div>
  );
};
