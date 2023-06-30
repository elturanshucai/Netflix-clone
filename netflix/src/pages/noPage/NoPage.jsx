import { Link } from 'react-router-dom'
import './noPage.scss'

export default function NoPage() {
    return (
        <div className='noPage'>
            <div className="container">
                <h1 className='notfound'>Page Not Found</h1>
                <h1 className='error'>404</h1>
                <Link to="/" className='link'>
                    <p>Go to Home Page</p>
                </Link>

            </div>
        </div>
    )
}
