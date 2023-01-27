import React from 'react'

const Forms = () => {
  return (
    <div>
        Add New Student
        <form>
        <div className='form-div'><lable hrmlFor='name'>Name:</lable>
        <input type='text'></input><br/></div>

        <div className='form-div'><lable hrmlFor='age'>Age:</lable><br/>
        <input type='number'></input></div>

        <div className='form-div'><lable hrmlFor='course'>Course</lable><br/>
        <input type='text'></input></div>

        <div className='form-div'><lable hrmlFor='batch'>Batch</lable><br/>
        <input type='text'></input></div>
        </form>
    </div>
  )
}

export default Forms