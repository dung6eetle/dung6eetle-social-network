import React from 'react'
import classes from './users.module.css'

function Users(props) {
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
                          {u.location.city},{u.location.country}
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