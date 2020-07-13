import React from 'react'
import classes from './users.module.css'
import * as Axios from 'axios'

function Users(props) {
    if (props.users.length === 0) {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => 
        props.setUsers(response.data.items)
      )
    }
    
    
    return (
        <div>
           {
               props.users.map(u => <div key={u.id}>
                  <span>
                      <div className={classes.name}>
                          {u.name}
                      </div>
                      <div className={classes.status}>
                          {u.status}
                      </div>
                      <div className={classes.location}>
                          {"u.location.city"},{"u.location.country"}
                      </div>
                      <div className={classes.button}>
                            {u.followed ? 
                               <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button> 
                               : 
                               <button onClick={() => {props.follow(u.id)}}>follow</button>
                             } 
                      </div>
                  </span>
               </div>)
           }
        </div>
    )
}

export default Users