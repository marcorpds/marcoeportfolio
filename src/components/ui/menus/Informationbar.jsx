import "./Informationbar.scss";

function Informationbar() {
  return (
    <>
      <div className="Informationbar">
        <div className="topLine" />
        <div className="menu">
          <div className="linkedin">
            <p>LinkedIn</p>
          </div>
          <div className="github">
            <p>Github</p>
          </div>
          <div className="codepen">
            <p>CodePen</p>
          </div>
          <div className="instagram">
            <p>Instagram</p>
          </div>
          <div className="facebook">
            <p>Facebook</p>
          </div>
          <div className="youtube">
            <p>Youtube</p>
          </div>
          <div className="email">
            <p>Email</p>
          </div>
        </div>
        <div className="bottomLine" />
      </div>
    </>
  );
}
export default Informationbar;
