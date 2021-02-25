import { API } from '../config';


export const getPosts = () => {
    return fetch(
        `${API}`,
        {
            method: 'GET'
        }
    )
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
}

export const getPost = (post_id) => {
  return fetch(
      `${API}/:${post_id}`,
      {
          method: 'GET'
      }
  )
      .then(response => {
          return response.json()
      })
      .catch(err => console.log(err));
}

export const addPost = (post) => {
  return fetch(`${API}`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err)
  })
}

export const deletePost = (post) => {
  return fetch(`${API}/:${post.id}`, {
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err)
  })
}

export const updatePost = (post) => {
  return fetch(`${API}/:${post.id}`, {
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err)
  })
}