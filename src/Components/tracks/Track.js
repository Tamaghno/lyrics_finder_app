import React from 'react'
import {Link} from 'react-router-dom'
const Track=(props)=>{
    const { track }=props;
    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4><i className="fas fa-user" color="red"></i> {track.artist_name}</h4>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i>Track</strong> : {track.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"></i> Album </strong> : {track.album_name}
                        <br/>
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`}
                    className="btn btn-danger btn-block">View Lyrics</Link>
                </div>
            </div>
        </div>
    )
}
export default Track;