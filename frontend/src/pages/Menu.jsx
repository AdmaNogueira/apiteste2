import React from 'react'
import './Menu.css'

import { useState, useEffect } from "react";
import axios from "axios";
import { Api } from '../api/Api';

const Menu = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await Api.get('/curso');
      const data = response.data;
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getPosts()

  }, []);
  return (
    <div className="container">
      {posts && posts.map(curso => (
            <div key={curso.id}>
                <div className="elements">
                  <h1>{curso.nome}</h1>
                  <img className="cursosImg"
                  src={curso.linkimg} />
              </div>
            </div>
           ))}
    </div>
  )
}

export default Menu
