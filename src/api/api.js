import React from "react";
import * as Axios from "axios";

export const getUsers = (currentPage, pageSize) => {
  return (
  Axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true,
      headers: { "API-KEY": "5244641d-cf75-402c-bbdb-0144979168bb" },
    }
  ).then(response => {
      return response.data})
  )
  };
