import React from 'react'
import './styling/footer.scss'

export default function Footer() {
    return (
        <div className="footer">
        <h2 className="footer__head">Any Questions or Comments? Contact <a className="link" href="mailto:lucas.bernardini97@gmail.com">Lucas</a></h2>
            <p className="footer__p">Workout Tracker is used to save information about your next workout session. All data is saved to local storage. Future iterations of the application will implement login features to store your workouts.</p>
        </div>
    )
}
