import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

    const getFilter = (event) => {
      const name = event.target.value.trim();
      dispatch(changeFilter(name));
    };
  


  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="search">
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        value={filter}
        onChange={getFilter}
      />
    </div>
  );
};

export default SearchBox