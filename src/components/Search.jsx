import React from 'react';
function Search(props){
  function handleChange(event){
    const value=event.target.value;
    props.searchFilter(value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search for items"/>
    </div>
  );
}
export default Search;
