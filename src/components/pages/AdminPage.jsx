import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const AdminPage = () => {
  const [data,setData] = useState([])
  const [del, setDel] = useState(false)
  const [user, setUser] = useState(true)
  

  useEffect(() => {


    axios({
      

        url: user? "http://localhost:8080/data": "http://localhost:8080/adminlogin",
        method: "get",

    })
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
 },[del,user])

 const handleDelete = (userId)=>{
  axios.delete(`http://localhost:8080/data/${userId}`)
      .then(() => {
        setData(data.filter(user => user.id !== userId))
        setDel(!del)
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }
 
  const handleUser =()=>{
     setUser(true)
  }
  const handleAdmin =()=>{
    setUser(false)
  }


      




  return (
    <DIV>
      <div className='admin'>
        <img src="https://www.pngmart.com/files/13/Square-Transparent-Images-PNG.png" alt="" />
        <h4>Hello Admin</h4>
        <br />
        
        <button className='btn' onClick={handleUser}><i class='bx bxs-group'></i> Users</button>
        <br />
        <button className='btn' onClick={handleAdmin}><i class='bx bx-user-plus'></i> Admins</button>
      </div>

      <div className='table'>
        
        <h1>
          { user? "All users details"
            :
            "All Admins details"}
           
          
        </h1>
        <table>
        <thead>
          <tr>
          <th>S.N.</th>
          <th>E-mail</th>
          <th>Password</th>
          
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data?.map((el)=>(
          <tr id={el.id}>
              <td>{el.id}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              
             <td> <button onClick={()=>handleDelete(el.id)}>Delete</button></td>
            </tr>
         ))
         }
        
        </tbody>
        </table>
        
      </div>
    </DIV>
  )
}

export default AdminPage;



const DIV = styled.div`
margin-top: 20px;
display: flex;
gap: 50px;
padding: 0px 0px 400px 0px;


  .admin{
     text-align: left;
     /* border: 2px solid red; */
     width: fit-content;
     padding: 20px;
     background-color: #5e5f61;
     color: white;
     height: 600px;
     
  }
  .admin img{
    width: 50px;
    /* border: 2px solid red; */
    border-radius: 50%;
    margin-left: 21px;
  }
  .table{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .table th{
     /* border: 2px solid red; */
     padding: 20px 80px 20px 80px;
   
  }
  .table td{
    padding: 20px 80px 20px 80px;
  }

  td{
  background-color: #a5a4a0;
  }

  .btn{
    padding: 5px 15px 5px 15px;
    width: 100px;
    margin-top: 5px;
  }
`