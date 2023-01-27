import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './Component.css'

const Student = () => {
    const [Data,setData]=useState({Name1:"Surya",Age:'20',Course:'MERN',Batch:'September'})
    const [arrData,arrDataSet]=useState([])
    const [TrueFalse,setTrueFalse]=useState(false)
    const ChangeHandel=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
        console.log(Data)

    }
    const Clickfun=(e)=>{
        e.preventDefault();
        arrDataSet([...arrData,Data])
        setTrueFalse(!TrueFalse)
        console.log(arrData)
    }
    const PageChange=()=>{
        setTrueFalse(!TrueFalse)
    }
  return (
    <div>
        <div>
            <form>
                {TrueFalse ?
                    <div>
                        <div className='form-div'><label htmlFor='name'>Name:</label><br/>
                        <input type='text' name='Name1' value={Data.Name1} onChange={ChangeHandel}></input><br/></div>

                        <div className='form-div'><label htmlFor='age'>Age:</label><br/>
                        <input type='number' name='Age' value={Data.Age} onChange={ChangeHandel}></input><br/></div>

                        <div className='form-div'><label htmlFor='course'>Coursee:</label><br/>
                        <input type='text' name='Course' value={Data.Course} onChange={ChangeHandel}></input><br/></div>

                        <div className='form-div'><label htmlFor='batch'>Batch:</label><br/>
                        <input type='text' name='Batch' value={Data.Batch} onChange={ChangeHandel}></input><br/></div>

                        <button onClick={PageChange}>Cancle</button>
                        <button type='submit' onClick={Clickfun}>Click Here</button>
                    </div>
                    :
                    <div>
                        <span id='span1'>Student Details</span>
                        <button id='btn1' onClick={PageChange}>Add New Student</button>
                        <div className='flex' >
                            <div className='box'>Name</div>
                            <div className='box'>Age</div>
                            <div className='box'>Course</div>
                            <div className='box'>Batch</div>
                            <div className='box'>Change</div>
                        </div>
                        {
                            arrData.map((item,index)=>{
                                return(
                                    <div key={index} className='flex1'>
                                        <div className='box1'>{item.Name1}</div>
                                        <div className='box1'>{item.Age}</div>
                                        <div className='box1'>{item.Course}</div>
                                        <div className='box1'>{item.Batch}</div>
                                        <div className='box1'><Link to='/student/edit'>Edit</Link></div>

                                    </div>
                                )
                            })
                        }
                    </div>



                }
            </form>
        </div>

    </div>
  )
}

export default Student