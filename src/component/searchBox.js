// import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="h3 pa2">
            <input className= "pa2 ba bg-lightest-blue" type="search" placeholder="Search" onChange = {searchChange}/>
        </div>
    );
}

export default SearchBox;
