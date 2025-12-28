import { useContext } from "react";
import Product from "../Components/Product";
import { UserContext } from "../Components/ContextProvider";
const Products = () => {
  const { productData } = useContext(UserContext);
  return (
    <section className="my-5">
      <div className="container px-sm-0 px-3">
        <div className="row">
          {productData.map((data) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-6 p-1">
                  <Product data={data} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
