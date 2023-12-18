import ReactPlayer from 'react-player';

export default function BackgroungVideo() {
    return (
        <div className="bg-video">
            <video className="bg-video-content" autoPlay muted loop>
                <source src= '/video/PXL_20230326_182421932.mp4' type="video/mp4" />
            </video>
        </div>
    )
}