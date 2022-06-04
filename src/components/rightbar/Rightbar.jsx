import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarBirthday">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt="" />
            <span className="birthdayText">
              {" "}
              <b>Pola Foster</b> and <b>3 Other Friends</b> have birthday today.
            </span>
          </div>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
