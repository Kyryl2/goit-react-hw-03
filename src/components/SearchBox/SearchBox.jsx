const SearchBox = ({ handleInpute }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleInpute} />
    </div>
  );
};

export default SearchBox;
