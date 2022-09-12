import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardHome from "../home/CardHome";
import CategoryFilter from "../home/CategoryFilter";
import InputSearch from "../home/InputSearch";
import PriceFilter from "../home/PriceFilter";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filterProduct, setFilterProduct] = useState();
  const [objFilterPrice, setObjFilterPrice] = useState({});

  const products = useSelector((state) => state.products);
  // console.log(products);
  console.log(inputSearch);

  useEffect(() => {
    if (inputSearch.length !== 0) {
      const filter = products?.filter((e) =>
        e.title.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setFilterProduct(filter);
    } else {
      setFilterProduct("");
    }
  }, [inputSearch]);

  /* filtro por price */
  useEffect(() => {
    const filter = products?.filter((e) => {
      const price = Number(e.price);
      const min = objFilterPrice.from;
      const max = objFilterPrice.to;
      /* Cuando colocan un valor en los dos lados */
      if (min && max) {
        return min <= price && price <= max;
        /* Valor EN UN SOLO if */
      } else if (min && !max) {
        return min <= price;
        /* Valor en max  */
      } else if (!min && max) {
        return price <= max;
        /* No rellena ningun input */
      } else {
        return true;
      }
    });
    setFilterProduct(filter);
  }, [objFilterPrice.to, objFilterPrice.from]);

  return (
    <div className="home">
      <InputSearch setInputSearch={setInputSearch} />
      <CategoryFilter />
      <PriceFilter setObjFilterPrice={setObjFilterPrice} />

      <div className="home__container-card">
        {filterProduct
          ? filterProduct?.map((product) => (
              <CardHome key={product.id} product={product} />
            ))
          : products?.map((product) => (
              <CardHome key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Home;
