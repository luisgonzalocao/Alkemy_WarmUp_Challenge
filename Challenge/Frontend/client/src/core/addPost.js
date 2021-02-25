import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from './header';
import "./css/addPost.css";
import {addPost} from './apiCore';



const AddPost = () => {
  
  const [values, setValues] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
    error: '',
    success: false
  })

  const {title, category, content, image,  success, error } = values


  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value }) 
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ 
      ...values, 
      error: false 
    })
    
    addPost({title, category, content, image}).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          title: '',
          category: '',
          content: '',
          image: '',
          error: '',
          success: true
        })
      }
    })
  }


  const addPostForm = () => (
      <form className="sign-box-add">
        <div className='form-group'>
          <label  className='text-muted' 
                  placeHolder='ej: juan123'>Título
          </label>
          <input
            onChange={handleChange('title')}
            value={title}
            type='text'
            className='form-control'/>
        </div>
        <div className='form-group'>
          <label className='text-muted'>Categoría</label>
          <input
            onChange={handleChange('category')}
            type='text'
            value={category}
            className='form-control'/>
        </div>
        <div className='form-group'>
          <label className='text-muted'>Contenido</label>
          <input
            onChange={handleChange('content')}
            type='text'
            value={content}
            className='form-control'/>
        </div>
        
        <div className='form-group'>
          <label className="text-muted">Imagen (URL) </label>
          <input
            onChange={handleChange('image')}
            value={image}
            type='text'
            className='form-control'/>
        </div>
        <div className="container-fluid">
          <button onClick={clickSubmit} className='btn btn-primary'>
          Registrar Post
          </button>
        </div>
  </form>
)

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{display: success ? '':'none'}}> Post registrado!  </div>
  )

  
  return (
    <>
      <Header/>
      <div className="mt-5">
        <h4 className="text-center mb-5">Nuevo Post</h4>
        {showError()}
        {showSuccess()}
        {addPostForm()}
      </div>
    </>
  )
}

export default AddPost;