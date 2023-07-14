import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios"
import './home.scss'

export default function Home({ type }) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}${type ? "lists?type=" + type : ''}${genre ? "&genre=" + genre : ''}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTcwOGM3YWI3YWQ3Mjg1OTliMzQ2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTM0OTg5MiwiZXhwIjoxNjg5NzgxODkyfQ.q18aBZfPYSp4pOEGfVxDDV7nQH01ZCJtSvCiz8PuG-U"
          }
        })
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {
        lists.map(list => (
          <List key={list._id} list={list} />
        ))
      }
      {
        lists?.length === 0 && <div style={{ color: 'white' }}>
          Uygun siyahi yoxdur
        </div>
      }
    </div>
  )
}