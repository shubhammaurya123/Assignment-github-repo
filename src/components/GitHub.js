import React, { useEffect, useState } from "react";
import Gititem from "./Gititem";

const GitHub = () => {
  const [item, setitem] = useState([]);
  const [page, setpage] = useState(1);
  const [sortBy, setsortBy] = useState("stars");
  const [order , setorder] = useState("desc");
  const [isOpen, setisOpen] = useState(false);

  const updateHub = async () => {
    const url = `https://api.github.com/search/repositories?q=language:Javascript&sort=${sortBy}&order=${order}&page=${page}&per_page=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setitem(parsedData.items);
    
  };

  useEffect(() => {
    updateHub();
  }, [page, sortBy , order ]);

  const Next = async () => {
    setpage((page) => page + 1);
  };

  const Previous = async () => {
    setpage((page) => page - 1);
  };

  const toggleOpen = () => setisOpen(!isOpen);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  return (
    <>
      <div className="container">
        <div className="dropdown" onClick={toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            SortBy
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item" href="#nogo" onClick={()=>{setsortBy("stars"); setorder("asc")}}>
              Stars Ascending
            </div>
            <div className="dropdown-item" href="#nogo" onClick={()=>{setsortBy("stars"); setorder("desc")}}>
              Stars Descending
            </div>
            <div className="dropdown-item" href="#nogo" onClick={()=>{setsortBy("name"); setorder("asc")}}>
              Name Ascending
            </div>
            <div className="dropdown-item" href="#nogo" onClick={()=>{setsortBy("name"); setorder("desc")}}>
              Name Descending
            </div>
          </div>
        </div>
        <div className="row">
          {item.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Gititem
                  full_name={element.full_name}
                  description={element.description}
                  name={element.name}
                  forks={element.forks_count}
                  language={element.language}
                  stars={element.stargazers_count}
                  avatar_url={element.avatar_url}
                  html_url={element.html_url}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-5 d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={Previous}>
            {" "}
            &laquo; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={Next}>
            Next &raquo;
          </button>
        </div>
      </div>
    </>
  );
};
export default GitHub;
