import React,{useState} from 'react';
import {useSelector, useDispatch,shallowEqual} from 'react-redux'
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from './logo.svg';
import './App.css';
import  {addUser,deleteUser,editUser} from './components/redux/actions.js'

const App=()=>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [index,setIndex] = useState(-1)
  const [isTrue,setTrueEdit] = useState(false)
  const  {userdata,addData}= useSelector(state => ({
      userdata:state.userData
  }),shallowEqual)
  console.log({userdata})
  const dispatch = useDispatch();
  const adduser =event => {
    event.preventDefault()
    const addValue = {id:userdata.length+1,name:name,email:email,password:password}
     dispatch(addUser(addValue))
     setName('')
     setEmail('')
     setPassword('')
  }
  const edituser = event =>{
    event.preventDefault()
    const editValue = {id:index,name:name,email,password:password}
    dispatch(editUser(editValue))
    setName('')
    setEmail('')
    setPassword('')
    
     
  }
  const GetName = name=>{
    setName(name)
  }
  const GetEmail = email=>{
    setEmail(email)
  }
  const GetPassword = password =>{
    setPassword(password)
  }
  const EditUser = id =>{
    setTrueEdit(true)
    const index = userdata.findIndex(d=>d.id===id)
    setIndex(userdata[index].id)
    setName(userdata[index].name)
    setEmail(userdata[index].email)
    setPassword(userdata[index].password)
    
  }
  const AllClear =()=>{
    setTrueEdit(false)
    setName('')
    setEmail('')
    setPassword('')
  }
 console.log({name})
  return (
    <div className="redux-class container mt-4">
        <h4 className="text-center">React Redux Hooks</h4>
      <div className="row mt-5">
        <div className="col-md-6">
          {!isTrue?<div> <h5 className="text-align-center">Add USERS</h5>

<form className="col-md-6" onSubmit={(e)=>adduser(e)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>GetName(e.target.value)}id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Enter your name" />

  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={email} className="form-control" onChange={(e)=>GetEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" value={password} className="form-control" onChange={(e)=>GetPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>:
 <div><h5 className="text-align-center">Edit USERS</h5>

 <form className="col-md-6" onSubmit={(e)=>edituser(e)}>
   <div className="form-group">
     <label for="exampleInputEmail1">Name</label>
     <input type="text" className="form-control" value={name} onChange={(e)=>GetName(e.target.value)}id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Enter your name" />

   </div>
   <div className="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input type="email" value={email} className="form-control" onChange={(e)=>GetEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

   </div>
   <div className="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input type="password" value={password} className="form-control" onChange={(e)=>GetPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
   </div>
   <button type="submit" className="btn btn-primary">Edit</button>
   <button type="submit" className="btn btn-primary ml-2" onClick={()=>AllClear()}>cancel</button>
 </form>
</div>
}
</div>
        <div className="col-md-6">
          <h5 className="text-align-center">Users Table</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userdata.length > 0 ? (
                userdata.map((v, k) => {
                  return (
                    <tr key={k}>
                      <th scope="row">{v.id}</th>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.password}</td>
                      <td><button className="btn btn-primary" onClick={()=>EditUser(v.id)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={()=>dispatch(deleteUser(v.id))}>delete</button></td>
                    </tr>
                  )
                })
              )
                :
                <tr>
                  <td colSpan={3}>No users</td>
                </tr>

              }
            </tbody>
          </table>
        </div>
      </div>






    </div>
  );
}

export default App;
