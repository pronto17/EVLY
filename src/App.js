import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import './App.css';
import StarRating from "./StarRating";

var numbers = {code: [
  {
    id:1, name: ''
  },{
    id:2, name: 'broo'
  }]
};


function App()
{
  return(
    <div className="App">
      <div className='event-details-container'>
        <div className='event-details-title'>
          <table>
          <tr>

            <td id="1">a  <StarRating></StarRating></td> 
            

            </tr>
            <script>
              {numbers.code[1].name = 'nig'}
            </script>
            <tr>

            <td id="2">b {numbers.code[1].name} <StarRating/></td> 


        </tr>
              <tr>

                  <td id="3">c <StarRating/></td> 


                  </tr>

                  
            </table>
            
        </div>
      </div>

    </div>
    
  )
  
}
export default App;