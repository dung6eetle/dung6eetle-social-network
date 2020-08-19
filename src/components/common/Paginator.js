import React, { useState } from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
  ...props
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log("portionSize", portionSize);
  let portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * pageSize;
  return (
    <div>
      { portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>tuda</button>}
      <div>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                key={p.id}
                className={
                  currentPage === p ? classes.selectedPage : classes.defaultPage
                }
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
      </div>
      
      { portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>suda</button>}
      
    </div>
  );
};
export default Paginator;
