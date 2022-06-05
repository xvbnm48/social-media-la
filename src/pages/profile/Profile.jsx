import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/endo_sakura.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sakura Endo</h4>
              <span className="profileInfoDesc">おはようございます</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
