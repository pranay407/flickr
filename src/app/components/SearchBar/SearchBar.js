import axios from "axios";
import React, { useState } from "react";
import { API_KEY } from "../Api";

import Groups from "../Groups/Groups";

function SearchBar() {
  const [inputText, setInputText] = useState("");

  const [avatars, setAvatars] = useState([]);

  const handleSearch = (e) => {
    let query = e.target.value;
    setInputText(query);
  };

  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      fetchGroups(inputText);
    }
  };

  //   async
  function fetchGroups() {
    // let res = await
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.groups.search&api_key=${API_KEY}&text=${inputText}&per_page=20&format=json&nojsoncallback=1`
      )
      .then((res) => {
        let picArray = res.data.groups.group.map((pic) => {
          var srcPath = `http://farm${pic.iconfarm}.staticflickr.com/${pic.iconserver}/buddyicons/${pic.nsid}.jpg`;
          return (
            <>
              <div key={pic.nsid}>
                <h3>{pic.name}</h3>
                <h3>{pic.members}</h3>
                <img alt="avatar" src={srcPath}></img>
              </div>
            </>
          );
        });

        setAvatars(picArray);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={fetchGroups}>Search</button>
      <Groups searchGroups={avatars} />
    </div>
  );
}

export default SearchBar;
