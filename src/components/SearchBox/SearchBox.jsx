import c from "./SearchBox.module.css";

const SearchBox = ({ handleInpute }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleInpute} className={c.input} />
    </div>
  );
};

export default SearchBox;
