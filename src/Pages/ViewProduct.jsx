import { useContext } from "react";
import { UserContext } from "../Components/ContextProvider";
import { data, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { GiShoppingBag } from "react-icons/gi";
import Style from "../Style/ViewProduct.module.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const props = useParams();
  const navigate = useNavigate();
  const { productData } = useContext(UserContext);

  const product = productData.find((product) => product.id == props.id);
  const handleDecreaseCount = () => {
    if (product.count > 1) {
      product.count -= 1;
    }
  };
  const handleIncreaseCount = () => {
    product.count += 1;
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row g-3">
                <div className="col-12">
                  <img src={product.images[0]} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                  <img src={product.images[1]} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                  <img src={product.images[2]} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                  <img src={product.images[3]} className="img-fluid" alt="" />
                </div>
                <div className="col-6">
                  <img src={product.images[4]} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <ReactStars
                count={5}
                value={5}
                size={25}
                color2={"#ffa800"}
                edit={false}
              />
              <p>Trusted by 1000+ Customers</p>
              <h2 className="fw-bold">{product.name}</h2>
              <p>{product.oldPrice}</p>
              <p>{product.newPrice}</p>
              <div className="border d-flex justify-content-between align-items-center gap-4 p-1 mb-4 w-50">
                <div className="btn" onClick={handleDecreaseCount}>
                  <FaMinus />
                </div>
                <div className="">{product.count}</div>
                <div className="btn" onClick={handleIncreaseCount}>
                  <FaPlus />
                </div>
              </div>
              <button
                className={`d-flex align-items-center justify-content-center gap-3 p-3 border-0 bg-black fw-semibold w-100 text-white ${Style.vibrate}`}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/checkout/" + product.id);
                }}
              >
                <GiShoppingBag /> Order Now - Cash On Delivery
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProduct;
