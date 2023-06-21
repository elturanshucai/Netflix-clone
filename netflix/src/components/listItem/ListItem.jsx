import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'
import { useState } from 'react'

export default function ListItem() {
  const [isHovered, setIsHovered] = useState(false)

  const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  return (
    <div className='listItem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src="https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=" alt="itemImage" />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>2001</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor rerum omnis dolorem totam eligendi enim libero quia exercitationem quas, veritatis neque voluptatibus doloribus quidem ea eveniet amet quisquam facilis.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}
