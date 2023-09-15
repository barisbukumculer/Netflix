import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <iframe
        className="video"
        autoPlay
        progress
        controls
        src="https://www.dailymotion.com/embed/video/x7lntle?autoplay=1"
      />
    </div>
  );
}