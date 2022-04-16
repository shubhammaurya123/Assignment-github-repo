import React from "react";

const Gititem = (props) => {
  let {
    name,
    description,
    full_name,
    language,
    stars,
    forks,
    avatar_url,
    html_url,
  } = props;
 
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >    
        </div>

        <div className="card-body">
          <img
            src={
              !avatar_url
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : avatar_url
            }
            className="card-img-top"
            alt="..."
          />
          <span className="badge rounded-pill bg-danger"> {full_name} </span>
          <h5 className="card-title">  Name-{name}  </h5>
          <p className="card-text">{description}</p>
          <h5 className="card-text">
            <small className="text-muted"> <h5> Language -{language}</h5></small>
          </h5>
          <h5 className="card-text">
            <small className="text-muted"><h5> Forks - {forks}</h5> </small>
          </h5>
          <h5 className="card-text">
            <small className="text-muted">  Stars-{stars} </small>
          </h5>
          <a
            rel="noreferrer"
            href={html_url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
           Go to Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gititem;
