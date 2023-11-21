// App.js

import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import './App.css'; // Import the CSS file
const apikey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <div className="center">
        <h1>Gallery Snapshots</h1>
        <div className="formContainer">
          <form onSubmit={submitHandler}>
            <input size="30" type="text" value={search} onChange={changeHandler} /><br /><br />
            <input type="submit" value="Search" />
          </form>
        </div>
        <br />
        {data.length >= 1 ? (
          <div className="galleryContainer">
            <Gallery data={data} />
          </div>
        ) : (
          <h4>No Data Loaded</h4>
        )}
      </div>
    </div>
  );
};

export default App;
