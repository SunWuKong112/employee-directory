import React, {useState, useEffect} from "react";
import EmployeeContext from "../../api/EmployeeContext";
import API from "../../api";
import {
     useInput
     // useBoolean,
     // useNumber,
     // useArray,
     // useOnMount,
     // useOnUnmount
   } from "react-hanger";

function Search(){
     const searchString = useInput("");

     const [emp,setState] = useState([]);
     const [empFilter,setFillState] = useState([]);
     useEffect(()=>{
          API.getEmployees().then(res=>{
               setState(res.data.results);
               setFillState(res.data.results);
          });
     },[]);
     function filterEmployees(){
          setFillState(emp.filter(empL=>{
               const query= searchString.value;
               if(empL.gender.includes(query)|| empL.name.first.includes(query) || empL.name.last.includes(query)){
                    return true;
               }else{
                    return false;
               }
          }));
     }
     return(
          <EmployeeContext.Provider value={empFilter}>
               <textarea {...searchString.eventBind}></textarea> <button onClick={filterEmployees}>Search</button>
               <table class="table">
                    <thead>
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Email</th>
                         </tr>
                    </thead>
                    <tbody>
                         {empFilter.map((obj,index) =>{
                              return <tr key={`item${index}`}>
                                        <th scope="row">{index}</th>
                                        <td>{obj.name.first}</td>
                                        <td>{obj.name.last}</td>
                                        <td>{obj.email}</td>
                                     </tr>
                              })}
                    </tbody>
               </table>
               <p>API RESPONSE: {JSON.stringify(empFilter)}</p>
          </EmployeeContext.Provider>
     );
}

export default Search;