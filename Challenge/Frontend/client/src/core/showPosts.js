import React, {useState, useEffect} from 'react';
import './css/showPosts.css';
import { getPosts, getPost, deletePost, updatePost } from './apiCore';
import editSVG from '../public/edit.svg';
import deleteSVG from '../public/delete.svg';
import detailSVG from '../public/detail.svg';
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from 'reactstrap';

const ShowPosts = () => {

    const [modalRegistration, setModalRegistration] = useState(false);
    const [modalEdition, setModalEdition] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    const [modalPost, setModalPost] = useState({
        id: 0,
        userId: 0,
        title: '',
        category: '',
        content: '',
        image:''
    })

    const loadPosts = () => {
        getPosts()
            .then(data => {
                if (data.error){
                    setError(data.error)
                }else{
                    let postsReceived= data;
                    setPosts(postsReceived);                   
                    console.log(postsReceived);
                };
            })
    }

    const loadPost = (value) => {
        getPost(value.id)
            .then(data => {
                if (data.error){
                    setError(data.error)
                }else{
                    let postsReceived= data;
                    setModalEdition(postsReceived);                   
                    console.log(postsReceived);
                };
            })
    }

   
    const newRecord = () => {
        let newP = (modalPost);
        let listOfPosts = posts;
        console.log(newP);
        listOfPosts.push(newP);
        setPosts(listOfPosts);
        setModalRegistration(false);
    }

    const editPost = (value) => {
        updatePost(value);
        
    }

    const deletePost = (value) => {

        let op = window.confirm("Seguro que deseas Eliminar " + value.title);
        if(op){
            deletePost(value);
        }

    };

    useEffect(() => {
        loadPosts();
    }, [])


    const handleChange = e => {
        setModalPost({
            ...modalPost,
            [e.target.name]: e.target.value
        })
    }

    const showModalRegistration = () => {
        setModalRegistration(true);
    }

    const showModalEdition = () => {
        setModalEdition(true);
    }

    const hideModalRegistration = () => {
        setModalRegistration(false);
    }

    const hideModalEdition = () => {
        setModalEdition(false);
    }

    
    return(
            <div className="col">

                <Row>
                    <Col xs='6' align='center'  style={{marginTop: "2%"}}>
                        <Button color="primary" style={{marginTop: "4%"}} onClick={showModalRegistration}> + Nuevo Posteo </Button>
                    </Col>    
                </Row>
                
                <div className="centerTable">
                    <div className="table-responsive">
                        <table className="table" style={{opacity: "0.8", width: "100%"}}>
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Título</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    posts.map((value) => {
                                        return(
                                            <tr>
                                                <td>{value.title}</td>
                                                <td>
                                                    <Button onClick={()=> loadPost(value)}> <img src={detailSVG} width="15" height="15"></img></Button>{' '}
                                                    <Button onClick={()=> editPost(value)}> <img src={editSVG} width="15" height="15"></img></Button>{' '}
                                                    <Button onClick={()=> deletePost(value)} > <img src={deleteSVG} width="15" height="15"></img></Button>{' '}
                                                </td>
                                            </tr>)
                                        
                                    }) 
                                } 
                            
                            </tbody>
                        </table>
                </div>
                </div>

                <Modal isOpen={modalRegistration}>
                    <ModalHeader> 
                       <h3 > <p> Nuevo Posteo</p> </h3>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label> Título:</label>
                            <input className='form-control' name="title" type="text" onChange={handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label> Categoría:</label>
                            <input className='form-control' name="type" type="text" onChange={handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label> Contenido:</label>
                            <input className='form-control' name="amount" type="text" onChange={handleChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={newRecord}>Registrar</Button>{' '}
                        <Button color="danger" onClick={hideModalRegistration}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

        </div>
    )
}

export default ShowPosts;

