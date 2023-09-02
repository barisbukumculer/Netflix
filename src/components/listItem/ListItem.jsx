import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import AddIcon from '@mui/icons-material/Add';

export default function ListItem() {
  return (
    <div className="listItem">
      <img src="https://images4.alphacoders.com/217/217234.jpg" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon/>
          <ThumbUpOutlinedIcon/>
<ThumbDownOutlinedIcon/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 15 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores laboriosam nihil quia nostrum expedita maxime, ex reiciendis, nobis perspiciatis eaque quo vero, natus perferendis odio hic. Nisi, dolorum fugiat!
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}
