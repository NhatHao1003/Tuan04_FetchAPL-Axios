import React, { useState, useEffect } from 'react';

function Bai4() {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  var url = "https://jsonplaceholder.typicode.com/posts"
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => setData(data));

  // }, []);

  useEffect(() =>{
    async function fetchData(){
      var res = await fetch(url)
      var dataRes = await res.json()
      setData(dataRes)
      setDataSearch(dataRes)    
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fill = data.filter(data => data.title.includes(searchValue))
    setDataSearch(fill)
  }, [searchValue])
  

  return (
    <div>
      <input type="text" placeholder="Search by title..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      <ul>
        {dataSearch.map(data => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Bai4;
