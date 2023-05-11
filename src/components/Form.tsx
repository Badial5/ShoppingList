import React, { FormEvent, useState } from 'react'

import { useForm, FieldValues } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters.'}),

    age: z.number({invalid_type_error: 'Age field is required'}).min(18, {message: 'Age must be 18 years and above'})
})

//to make it typescript type or interface
type FormData = z.infer<typeof schema>

 

const Form = () => {

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)})
    // console.log(register('name')) 

    // const [person, setPerson] = useState({
    //     name: '',
    //     age: 0   
    // })

    const onSubmit = (data: FieldValues) => console.log(data)



    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault()
    //     console.log(person)
    // }



  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">


            <label htmlFor="name" className="form-label">Name</label>
            
            <input id="name" type="text" className="form-control"
            // value={person.name}
            // onChange={(e)=> setPerson({...person, name: e.target.value })}
            {...register('name')} 
            />

            {
                errors.name && (<p className='text-danger'>{errors.name.message}</p>)
            }

            {/* {
                errors.name?.type === 'required' && <p className='text-danger'>The name field is required</p>
            } */}

            {/* {
                errors.name?.type === 'minLength' && <p className='text-danger'>The name must be 3 or more characters </p>
            } */}


            <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>

            <input id="age" type="number" className="form-control"
            // value={person.age} 
            // onChange={(e)=> setPerson({...person, age: parseInt(e.target.value)}) }
            {...register('age', {valueAsNumber: true, required: true})}
            />
            {/* {errors.age?.type === "required" && (<p className='text-danger'>Age is required</p>)} */}
            {
                errors.age && (<p className='text-danger'>{errors.age.message}</p>)
            }
            </div>

            <button className="btn 
            btn-primary" 
            disabled={!isValid}
             type='submit'>Submit</button>


            
        </div>
    </form>
  )
}

export default Form
