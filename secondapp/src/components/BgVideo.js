import video from '../images/video.mp4'

const BgVideo = () =>{
    return(
        <div className = 'vid'>
            <video src={video} autoPlay loop/>
            <div className="content">
                <h1>Welcome</h1>
                <p>To my Restaurant.</p>
            </div>
        </div>
    )

    
}

export default BgVideo;