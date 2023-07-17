import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Featured({ type }) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomMovie = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}movies/random?type=${type}`, {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTcwOGM3YWI3YWQ3Mjg1OTliMzQ2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTU4ODY3MywiZXhwIjoxNjkwMDIwNjczfQ.z2Z2nOw8vprnjkfpPq1WG5YZbPwa9FLxioecMrwm5TM"
                }
            })
            setContent(res.data[0])
        }
        getRandomMovie()
    }, [type])
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasty">Fantasty</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="Content image" />
            <div className="info">
                <img src={content.imgTitle} alt="TitleImage" />
                <span className='desc'>
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
