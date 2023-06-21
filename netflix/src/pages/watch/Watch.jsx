import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export default function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className='video'
                autoPlay={true}
                progress
                controls
            />
        </div>
    )
}
