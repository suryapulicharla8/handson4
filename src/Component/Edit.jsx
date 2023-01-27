import React from 'react'
import {Link} from 'react-router-dom'

const Edit = () => {
  return (
    <div>Update Student Details
        <form>
        <div className='form-div'><label htmlFor='name'>Name:</label><br/>
        <input type='text'></input><br/></div>

        <div className='form-div'><lable hrmlFor='age'>Age:</lable><br/>
        <input type='number'></input><br/></div>

        <div className='form-div'><lable hrmlFor='course'>Course:</lable><br/>
        <input type='text'></input><br/></div>

        <div className='form-div'><lable hrmlFor='batch'>Batch:</lable><br/>
        <input type='text'></input><br/></div>

        <Link to='/student'><button>Cancle</button></Link>
        <Link to='/student'><button type='submit'>Update</button></Link>
        
        </form>
    </div>
    
  )
}

export default Edit