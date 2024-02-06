import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Getproduct() {
  const cuurentlocation = useSelector((state) => state.auth.location);
  // console.log("first", cuurentlocation);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    if (cuurentlocation) {
      axios
        .get(
          `http://localhost:5000/api/getProducts?lat=${cuurentlocation.lat}&lng=${cuurentlocation.lng}`
        )
        .then((res) => {
          console.log("data get from api", res.data.Products);
          setproducts(res.data.Products);
        })
        .catch((error) => console.log(error));
    }
  }, [cuurentlocation]);
  return (
    <div>
      {products.length > 0 ? (
        <div>
          <h2>Products Near you</h2>
          <div className="flex justify-evenly">
            {products.map((item, key) => (
              <div key={key} className="w-[250px] rounded-md border mx-2">
                <img
                  src={item.Imageurl}
                  alt="Laptop"
                  className="h-[150px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{item.Productname}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>There is no product near you</h2>
        </div>
      )}
    </div>
  );
}

export default Getproduct;
