import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsAction";
import Categorie from "../components/Home/Categorie";

export default function Products() {
  const [loadProduct, setLoadProduct] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadProduct) {
      dispatch(getProducts());
      setLoadProduct(false);
    }
  }, [loadProduct, dispatch]);
  return (
    <main className="products">
      <div className="products-categories">
        <Categorie />
      </div>
    </main>
  );
}
