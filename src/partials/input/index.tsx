'use client'
import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import Select from 'react-select'

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  optional?: boolean;
  type: HTMLInputTypeAttribute | 'textarea' | 'select';
}


const Input = (props: Props) => {
  const { name, type, optional } = props;

  const options = [{ value: 'complain', label: "Complaint" }, { value: 'question', label: 'Question' }]
  return (

    <div className={`Input ${type == 'select' ? "select" : ""}`} >

      < p > {name}</p >
      <div className='Input-Field'>
        {type == 'textarea' ?
          <textarea placeholder='Content'></textarea> :
          type == 'select' ?
            <Select options={options} /> :
            <input type={type} />
        }
      </div>
      <p>{optional ? "Optional" : ""}</p>
    </div >
  )
}

export default Input
