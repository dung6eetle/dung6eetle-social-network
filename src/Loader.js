import React from 'react'
import Loader from 'react-loader-spinner'
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./Loader.css"

 export default class App extends React.Component {
  //other logic
    render() {
     return(
          <div className="loader-fast">
             <Loader
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
 
          />
         </div>
        
     );
    }
 }

 
