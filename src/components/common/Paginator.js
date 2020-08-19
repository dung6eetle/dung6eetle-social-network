import React from "react";
import classes from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p.id}
              className={
                currentPage === p
                  ? classes.selectedPage
                  : classes.defaultPage
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
    </div>
  );
};
export default Paginator;
