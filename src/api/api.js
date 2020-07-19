import React from "react";
import * as Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "5244641d-cf75-402c-bbdb-0144979168bb" }
})

export const usersApi =  {
  getUsers (currentPage, pageSize) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    ).then((response) => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(
      `follow/${userId}`
    )
  },
  unfollow(userId) {
    return instance.delete(
      `follow/${userId}`
    )
  },
  getProfile(userId) {
    return instance.get(
      `profile/` + userId
    ).then((response) => {
      return response.data
    });
  }
}
export const authApi = {
  me () {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  }
}


