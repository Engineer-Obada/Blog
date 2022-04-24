import React, { Component } from 'react'


class AddBlog extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section >
                <div className='container'>
                    <form  >
                        <div className='mb-3 '>
                            <label for="first-name" className='col-form-label '>
                                title
                            </label>
                            <input type="text" className='form-control w-25  ' id=" first-name" ></input>
                        </div>
                        <div className='mb-3'>
                        
                        <textarea></textarea>
                        </div>
                        <div className='mb-3'>
                        <input type="file"></input>
                        </div>
                        <select>
                            <option>Please Select Category</option>
                        </select>
                        <br></br>
                        <button type='sumbit' className='btn btn-primary mt-3' >Add</button>
                    </form>
              </div>
            
            </section>
            
        )
    }

}

export default AddBlog;
