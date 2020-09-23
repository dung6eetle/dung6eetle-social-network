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
    )
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
  }
}
export const profileApi =  {
  getProfile(userId) {
    return instance.get(
      `profile/` + userId
    )
  },
  getStatus(userId) {
    return instance.get(
      `profile/status/` + userId
    )
  },
  updateStatus(status) {
    return instance.put(
      `profile/status`, {status: status}
    )
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
export const authApi = {
  me () {
    return instance.get(`auth/me`)
  },
  login (email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}


