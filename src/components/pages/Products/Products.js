// import React from "react";
// import "./Products.css";

// function Products() {
//   return (
//     <>
//       <div className="productSection">
//         <h1 className="topic">These are our products</h1>
//         <img src="../../images/cc.png" alt="" />
//         <img src="../../images/cc.png" alt="" />
//         <img src="../../images/cc.png" alt="" />
//         <img src="../../images/cc.png" alt="" />
//       </div>
//     </>
//   );
// }

// export default Products;
//---------------------------------
import React, { useState, useEffect } from "react";
import "./Products.css";
import { portfolio } from "./ProductItems";

function Products() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <center>
        <h1 className="title">Filter Products</h1>
      </center>
      <div className="portfolio__labels">
        <a
          id="filteritems"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </a>
        <a
          id="filteritems"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </a>
        <a
          id="filteritems"
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </a>
        <a
          id="filteritems"
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
        >
          UX/UI
        </a>
        <a
          id="filteritems"
          active={filter === "others"}
          onClick={() => setFilter("others")}
        >
          Others
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map((item) =>
          item.filtered === true ? (
            <img
              className="images"
              src={item.image}
              alt={item.name}
              onClick={console.log(item.name)}
            />
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}

export default Products;
