import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className="featured">
        {type&& (
            <div className="category">
                <span>{type==="movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option > Genre  </option>
                    <option value="adventure"> Adventure  </option>
                    <option value="comedy"> Comedy  </option>
                    <option value="crime"> Crime  </option>
                    <option value="fantasy"> Fantasy  </option>
                    <option value="historical"> Historical  </option>
                    <option value="horror"> Horror  </option>
                    <option value="romance"> Romance  </option>
                    <option value="sci-fi"> Sci-fi  </option>
                    <option value="thriller"> Thriller </option>
                    <option value="western"> Western </option>
                    <option value="animation"> Animation </option>
                    <option value="drama"> Drama </option>
                    <option value="docuöemtary"> Documentary </option>
                </select>
            </div>
        )}
      <img
        width={"100%"}
        src="https://wallpapercave.com/wp/wp3873604.jpg"
      />
      <div className="info">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0547c2-467a-4b92-a2fd-a014af686793/dail067-5778fe13-d603-43d3-8b6f-e205b8210f17.png/v1/fill/w_1600,h_550/lord_of_the_rings_png_title_by_workfromhomegal_dail067-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUwIiwicGF0aCI6IlwvZlwvM2UwNTQ3YzItNDY3YS00YjkyLWEyZmQtYTAxNGFmNjg2NzkzXC9kYWlsMDY3LTU3NzhmZTEzLWQ2MDMtNDNkMy04YjZmLWUyMDViODIxMGYxNy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.owJhwZy6_k11SCutQOVR_GX3AG_e8r-8BPxZkj7DpKk" alt="" />
        <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia eos earum velit eaque ipsam culpa aliquid. Fugit modi odio sapiente. Dolore, deleniti sunt magnam molestias explicabo dignissimos odit laboriosam nobis.</span>
      <div className="buttons">
        <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
        </button>
        <button className="more">
            <InfoOutlinedIcon/>
            <span>Info</span>
        </button>
      </div>
      </div>
    </div>
  );
}
