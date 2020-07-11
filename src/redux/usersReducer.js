const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS" 

let initialState = {
    users:[
        {id:1, name: 'Pol', followed:true, status: "IloveUK", location:{city:'London', country:'United Kingdom'}},
        {id:2, name: 'Uniik', followed:false, status: "IloveRU", location:{city:'Moskow', country:'Russia'}},
        {id:3, name: 'Rukka', followed:true, status: "IloveUSA", location:{city:'LosANGELS', country:'USA'}}
    ]

    
}
const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if (u.id === action.usersId) {
                   return {
                    ...u,
                    followed: true
                   }
                }
                return u;
            })
        }
        case UNFOLLOW:
        return {
            ...state,
            users: state.users.map( u => {
                if (u.id === action.usersId) {
                    return {
                    ...u,
                    followed: false
                    }
                }
                return u;
            })
        }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: 
        return state

    }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})

export default usersReducer