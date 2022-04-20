import React from "react";
import './App.css';
import StarRating from "./StarRating";

function App()
{
  return(
    <div className="App">
      <div className='event-details-container'>
        <div className='event-details-title'>
          <table>
          <tr>

            <td>a<StarRating/></td> 
            
          </tr>

          <tr>

            <td>b<StarRating/></td> 

          </tr>

          <tr>

            <td>c<StarRating/></td> 

          </tr>

          </table>
        </div>
      </div>

    </div>
  )
}
export default App;