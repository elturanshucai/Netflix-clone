import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Watch() {
    const location = useLocation()
    const movie = location.state?.movie
    return (
        <div className='watch'>
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>

            <video src={movie?.video}
                className='video'
                autoPlay={true}
                progress
                controls
            />
        </div>
    )
}
