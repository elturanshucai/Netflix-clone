import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListItem({ filmId, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}movies/find/${filmId}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTcwOGM3YWI3YWQ3Mjg1OTliMzQ2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTM0OTg5MiwiZXhwIjoxNjg5NzgxODkyfQ.q18aBZfPYSp4pOEGfVxDDV7nQH01ZCJtSvCiz8PuG-U"
          }
        })
        setMovie(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [filmId])

  return (
    <div className='listItem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={movie?.img} alt="itemImage" />

      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className='top'>
              <div className="icons">
                <PlayArrow className='icon' />
                <Add className='icon' />
                <ThumbUpAltOutlined className='icon' />
                <ThumbDownOutlined className='icon' />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  )
}
