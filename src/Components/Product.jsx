import { useNavigate } from "react-router-dom";
import Style from "../Style/Product.module.css";
import ReactStars from "react-stars";

const Product = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`cursor-pointer ${Style.mainBox}`}
      onClick={(e) => {
        e.stopPropagation();
        navigate("/viewproduct/" + data.id);
      }}
    >
      <div className={`overflow-hidden position-relative ${Style.innerBox}`}>
        <span className={`${Style.sale}`}>Sale</span>
        <img src={data.images[0]} alt={data.name} />
      </div>
      <p className={`mt-2 mb-0 fw-bold ${Style.productName}`}>{data.name}</p>
      <ReactStars
        count={5}
        value={5}
        size={25}
        color2={"#ffa800"}
        edit={false}
      />
      <div className={`d-sm-flex`}>
        <p className={`me-3 mb-0 ${Style.oldPrice}`}>Rs.{data.oldPrice}</p>
        <p className={`fw-bold ${Style.newPrice}`}>Rs.{data.newPrice}</p>
      </div>
    </div>
  );
};

export default Product;
