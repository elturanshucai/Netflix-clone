import { useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <div className={isScrolled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                        alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://w7.pngwing.com/pngs/457/936/png-transparent-lionel-messi-football-player-messi-ronaldo-rivalry-fc-barcelona-jersey-lionel-messi-tshirt-jersey-sports.png" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
