import { useState } from "react";
import MajoonTanTan from "../assets/image/majoonTanTan.png";
import toast, { Toaster } from "react-hot-toast";
import Style from ".././Style/CheckoutPage.module.css";

const CheckoutPage = () => {
  const notify = () =>
    toast.success(
      "آپ کا آرڈر کامیابی سے محفوظ ہو گیا ہے۔برائے کرم کال کا انتظار کریں۔",
      {
        duration: 8000,
        position: "top-center",
        style: {
          background: "#06a180",
          color: "white",
          textAlign: "right",
          fontSize: "20px",
          borderRadius: "8px",
          padding: "16px",
        },
      }
    );

  const [data, setData] = useState({
    id: "1",
    date: Date.now(),
    fullName: "",
    phoneNo: "",
    address: "",
    landmark: "",
    city: "",
    total: "2499",
    itemName: "Grow Strong Powder",
    itemCount: "1",
    deliveryStatus: "unFullfilled",
    paymentStatus: "Pending",
    deliveryMethod: "TCS",
  });

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      "https://script.google.com/macros/s/AKfycbx_hS9Wy4wpeTgfbYxkLOe0JyGr7bAYMvjikZEKbPHBvBcbtT1tC85nrNQ1b4AV9UaNtg/exec";

    const formData = new URLSearchParams();
    formData.append("Id", data.id);
    formData.append("Date", data.date);
    formData.append("FullName", data.fullName);
    formData.append("PhoneNo", data.phoneNo);
    formData.append("Address", data.address);
    formData.append("Landmark", data.landmark);
    formData.append("City", data.city);
    formData.append("Total", data.city);
    formData.append("ItemName", data.itemName);
    formData.append("ItemCount", data.itemCount);
    formData.append("DeliveryStatus", data.deliveryStatus);
    formData.append("PaymentStatus", data.paymentStatus);
    formData.append("DeliveryMethod", data.deliveryMethod);

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then(() => {
        setData({
          id: "",
          date: "",
          fullName: "",
          phoneNo: "",
          address: "",
          landmark: "",
          city: "",
          total: "",
          itemName: "",
          itemCount: "",
          deliveryStatus: "",
          paymentStatus: "",
          deliveryMethod: "TCS",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      })
      .finally(() => {
        setLoading(false);
        notify();
      });
  };

  return (
    <section className={`py-5 px-sm-0 px-3 ${Style.main}`}>
      <Toaster />
      {loading ? (
        <div
          className={`position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center z-4 ${Style.loadingBox}`}
        >
          <div className={`${Style.loader}`}></div>
        </div>
      ) : null}
      <div className={`container p-4 ${Style.contain}`}>
        <h2 className="pb-3 text-center text-uppercase fw-bold">
          Billing Details
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h3 className="fw-semibold">Cash on Delivery</h3>
              <hr className="mt-0 mb-2" />
              {/* Product Details */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={MajoonTanTan} className="me-3" width={50} alt="" />
                  <p
                    className={`mb-0 fw-semibold ${Style.fs18} ${Style.heading}`}
                  >
                    Majoon Tan Tan by Hakeem Shahzad
                  </p>
                </div>
                <div className="fw-bold">Rs.3999</div>
              </div>
              <hr className="mb-0 mt-2" />
              <h5 className="fw-semibold mt-4">Shipping method</h5>
              {/* Shipping Details */}
              <div className={Style.shippingMethod}>
                <div>
                  <input
                    type="radio"
                    checked
                    className="me-3 cursor-pointer"
                    id="shipping"
                  />
                  <label
                    htmlFor="shipping"
                    className="fw-medium cursor-pointer"
                  >
                    Free Shipping
                  </label>
                </div>
                <div className="fw-bold">Free</div>
              </div>

              <h4 className="text-center my-4 fw-bold">
                Enter Your Shipping address
              </h4>
              <form
                action=""
                onSubmit={(e) => {
                  handleFormSubmit(e);
                }}
              >
                <div className="form-group">
                  <label htmlFor="firstName" className="cursor-pointer label">
                    <h6 className="fw-bold">
                      Complete Name <span className="text-danger">*</span>
                    </h6>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="اپنا پورا نام لکھیں۔"
                    className={`form-control rounded-3  ${Style.fs14} ${Style.input}`}
                    required
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        fullName: e.target.value,
                      }));
                    }}
                    value={data.fullName}
                  />
                  <p className={` ${Style.fs14} ${Style.errorMsg}`}>
                    First name is required
                  </p>
                </div>

                <div className="form-group">
                  <label className="cursor-pointer label" htmlFor="phoneNo">
                    <h6 className="fw-bold">
                      Phone No <span className="text-danger">*</span>
                    </h6>
                  </label>
                  <input
                    id="phoneNo"
                    type="number"
                    placeholder="اپنا فون نمبر لکھیں جس پر آپ کال اُٹھا لیں۔"
                    className={`form-control rounded-3  ${Style.fs14} ${Style.input}`}
                    required
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        phoneNo: e.target.value,
                      }));
                    }}
                    value={data.phoneNo}
                  />
                  <p className={` ${Style.fs14} ${Style.errorMsg}`}>
                    First name is required
                  </p>
                </div>
                <div className="form-group">
                  <label className="cursor-pointer label" htmlFor="address">
                    <h6 className="fw-bold">
                      Address <span className="text-danger">*</span>
                    </h6>
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="اپنا مکمل پتہ لکھیں۔"
                    className={`form-control rounded-3  ${Style.fs14} ${Style.input}`}
                    required
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        address: e.target.value,
                      }));
                    }}
                    value={data.address}
                  />
                  <p className={` ${Style.fs14} ${Style.errorMsg}`}>
                    First name is required
                  </p>
                </div>
                <div className="form-group">
                  <label className="cursor-pointer label" htmlFor="landmark">
                    <h6 className="fw-bold">
                      Nearby Landmark <span className="text-danger">*</span>
                    </h6>
                  </label>
                  <input
                    id="landmark"
                    type="text"
                    placeholder="گھر کے قریب مشہور جگہ اسکول، بینک، ہسپتال یا مسجد کا نام لکھیں۔"
                    className={`form-control rounded-3  ${Style.fs14} ${Style.input}`}
                    required
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        landmark: e.target.value,
                      }));
                    }}
                    value={data.landmark}
                  />
                  <p className={`fs-14 ${Style.errorMsg}`}>
                    First name is required
                  </p>
                </div>
                <div className="form-group">
                  <label className="cursor-pointer label" htmlFor="city">
                    <h6 className="fw-bold">
                      City <span className="text-danger">*</span>
                    </h6>
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="اپنے شہر کا نام لکھیں۔"
                    className={`form-control rounded-3  ${Style.fs14} ${Style.input}`}
                    required
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        city: e.target.value,
                      }));
                    }}
                    value={data.city}
                  />
                  <p className={` ${Style.fs14} ${Style.errorMsg}`}>
                    First name is required
                  </p>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary w-100 fw-bold  ${Style.fs16} ${Style.button}`}
                >
                  COMPLETE ORDER - RS.3,999
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-lg-flex d-none justify-content-center align-items-center h-100">
              <img src={MajoonTanTan} className="img-fluid rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
