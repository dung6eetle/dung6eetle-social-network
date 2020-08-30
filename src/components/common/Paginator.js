import React, { useState } from "react";
import classes from "./Paginator.module.css";
import arrowLeft from '../../assets/arrow.svg'
import arrowRight from '../../assets/next.svg'

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
    <div className={classes.paginator_block}>
      <div className={classes.arrow_container}>
        {portionNumber > 1 && (
          <div className={classes.arrow} >
            <img src={arrowLeft} onClick={() => setPortionNumber(portionNumber - 1)}/>
          </div>
        )}
      </div>

      <div className={classes.pages_block}>
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

      <div className={classes.arrow_container}> 
      {portionCount > portionNumber && (
        <div className={classes.arrow} >
          <img src={arrowRight} onClick={() => setPortionNumber(portionNumber + 1)}/>
        </div>
      )}
      </div>
    </div>
  );
};
export default Paginator;
