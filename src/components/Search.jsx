import React from 'react';
function Search(props){
  function handleChange(event){
    const value=event.target.value;
    props.searchFilter(value);
  }
  return (
    <div>
      <label>Search for your favourite items: </label>
      <input class='form-control customInput' onChange={handleChange} type="text" placeholder="Search for items"/>
    </div>
  );
}
export default Search;
