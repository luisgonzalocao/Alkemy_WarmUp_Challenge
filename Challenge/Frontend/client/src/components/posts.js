import React, { Component } from 'react';
import './css/posts.css';
import axios from "axios";

import {  Modal, 
          ModalBody, 
          ModalFooter, 
          ModalHeader, 
          FormGroup,
          Button
        } from 'reactstrap';

import editSVG from '../public/edit.svg';
import deleteSVG from '../public/delete.svg';
import detailSVG from '../public/detail.svg';
import aceptSVG from '../public/acept.svg';
import rejectSVG from '../public/reject.svg';

const url = 'https://jsonplaceholder.typicode.com/posts/';

class Posts extends Component {
state={
  data:[],
  modalInsert: false,
  modalDelete: false,
  typeModal: '',
  form:{
    userId: 1,
    id: 0,
    title: '',
    body: ''
  }
}

// PETICION GET: ALL POSTS & NEWs ON CLIENT SIDE
petitionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

// POST
petitionPost=async()=>{
 delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsert();
    this.petitionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

// PUT 
petitionPut=()=>{
  axios.patch(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsert();
    this.petitionGet();
  })
}

// DELETE 
petitionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalDelete: false});
    this.petitionGet();
  })
}

modalInsert=()=>{
  this.setState({modalInsert: !this.state.modalInsert});
}

selectPost=(post)=>{
  this.setState({
    form: {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    }
  })
}



// HANDLE CHANGES
handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
}


componentDidMount() {
  this.petitionGet();
}

 
  

  render(){
    const {form}=this.state;
  return (
    <div className="col">
    <br /><br /><br />
    <div className="centerButton" >
      <Button  onClick={()=>{this.setState({form: null, typeModal: 'insert'}); this.modalInsert()}}>
      Crear Post +
      </Button>
    </div>
  
  <br /><br />
  <div className="centerTable">
    <div className="table-responsive">
      <table className="table " style={{opacity: "0.8", width: "100%"}}>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(post=>{
            return(
              <tr>
            <td>{post.title}</td>
              <td>
                  <Button  onClick={()=>{ this.selectPost(post); 
                                          this.setState({typeModal: 'view'}); 
                                          this.modalInsert()}}> 
                    <img src={detailSVG} width="15" height="15" alt=''></img>
                  </Button> 
                  {"   "}
                  <Button  onClick={()=>{ this.selectPost(post);
                                          this.setState({typeModal: 'update'}); 
                                          this.modalInsert()}}> 
                    <img src={editSVG} width="15" height="15" alt=''></img>
                  </Button>
                  {"   "}
                  <Button  onClick={()=>{this.selectPost(post); this.setState({modalDelete: true})}}> <img src={deleteSVG} width="15" height="15" alt=''></img> </Button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div> 
  </div>  



    <Modal isOpen={this.state.modalInsert}>
                <ModalHeader style={{display: 'block'}}>
                  <span  onClick={()=>this.modalInsert()}></span>
                </ModalHeader>
                <ModalBody>
                  { this.state.typeModal === 'view' ?
                  <FormGroup>
                      <label> Usuario ID: {form.userId}</label>
                  </FormGroup>:<></>
                  }
                  { this.state.typeModal === 'view'?
                  <FormGroup>
                      <label > Post ID: {form.id}</label>
                  </FormGroup>:<></>
                  }
                  { this.state.typeModal === 'view'? 
                    <FormGroup>
                        <label htmlFor="title"> Título</label>
                        <input className='form-control' readOnly name="title"  type="text" id="title"  value={form?form.title: ''}/>
                    </FormGroup>:<FormGroup>
                        <label htmlFor="title"> Título</label>
                        <input className='form-control' name="title"  type="text" id="title" onChange={this.handleChange} value={form?form.title: ''}/>
                    </FormGroup>
                  }
                  
                  {this.state.typeModal === 'view'?
                  <FormGroup>
                      <label htmlFor="body"> Cuerpo</label>
                      <textarea className='form-control' readOnly name="body" type="textarea" id="body"  value={form?form.body: ''}/>
                  </FormGroup>
                    :<FormGroup>
                      <label htmlFor="body"> Cuerpo</label>
                      <textarea className='form-control' name="body" type="textarea" id="body" onChange={this.handleChange} value={form?form.body: ''}/>
                  </FormGroup>
                  }
                  

                  

                </ModalBody>

                <ModalFooter>
               
                  { this.state.typeModal === 'insert' ?
                    <Button  onClick={()=>this.petitionPost()}>
                      <img src={aceptSVG} width="15" height="15" alt=''></img>
                    </Button> : 
                    this.state.typeModal === 'update' ? 
                      <Button  onClick={()=>this.petitionPut()}>
                      <img src={aceptSVG} width="15" height="15" alt=''></img>
                    </Button>: 
                    <Button  onClick={()=>this.modalInsert()}>
                      <img src={aceptSVG} width="15" height="15" alt=''></img>
                    </Button>
  }
                    {this.state.typeModal !== 'view'?
                    <Button onClick={()=>this.modalInsert()}>
                      <img src={rejectSVG} width="20" height="20" alt=''></img>
                    </Button>:<></>
                    }

                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalDelete}>
            <ModalBody>
               Estás seguro que deseas eliminar el post
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.petitionDelete()}>Sí</button>
              <button className="btn btn-secondary" onClick={()=>this.setState({modalDelete: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}

export default Posts;