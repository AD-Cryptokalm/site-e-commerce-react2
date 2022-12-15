import "../../styles/categorie.scss";
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"

export default function Categorie() {
  return (
    <div className="categorie">
      <h2>Découvrez toutes nos créations !</h2>
      <div className="categorie-links">
        <div className="categorie-link">
          <div className="categorie-linkImg">
            <img src={img1} alt="" />
          </div>
          <h3 className="categorie-linkName">
            Collier
          </h3>
        </div>
        <div className="categorie-link">
          <div className="categorie-linkImg">
            <img src={img2} alt="" />
          </div>
          <h3 className="categorie-linkName">
            Collier
          </h3>
        </div>
        <div className="categorie-link">
          <div className="categorie-linkImg">
            <img src={img3} alt="" />
          </div>
          <h3 className="categorie-linkName">
            Collier
          </h3>
        </div>
        <div className="categorie-link">
          <div className="categorie-linkImg">
            <img src={img4} alt="" />
          </div>
          <h3 className="categorie-linkName">
            Collier
          </h3>
        </div>
      </div>
    </div>
  );
}
