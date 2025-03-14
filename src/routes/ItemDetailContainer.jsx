import { useParams } from "react-router-dom";
import { getItemDetailById } from "../config/firebase";
import { useEffect, useState, useContext } from "react";
import { NotFound } from "../routes/";
import { PageLayout } from "../layouts/PageLayout";
import { ItemCount } from "../components";
import { CartContext } from "../context/CartContext";

export const ItemDetailContainer = () => {
  const { addProduct, cart } = useContext(CartContext);
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amountAdded, setAmountAdded] = useState(0);

  useEffect(() => {
    if (!itemId) return;

    const fetchProduct = async () => {
      setLoading(true);
      const productData = await getItemDetailById(itemId);
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [itemId]);

  if (loading) return <></>;

  if (!product) return <NotFound />;
  document.title = `${product.name} - ReactClothes`;

  const { id, name, price, stock, imageUrl, categoryId } = product;

  const onAmountChange = (amount) => {
    setAmountAdded(amount);
  };

  const inCart = cart.filter((e) => e.product.id === id)[0]?.amount ?? 0;

  const handleAddToCart = () => {
    const finalItem = {
      id,
      name,
      price,
      categoryId,
      imageUrl,
    };
    addProduct(finalItem, amountAdded);
    setAmountAdded(0);
  };

  return (
    <PageLayout
      title={`Producto - ${product.name}`}
      className={"flex flex-col md:flex-row md:justify-between gap-10"}
    >
      <div className="w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold text-[#0081a3]">{product.name}</h1>
        <p
          className={`${inCart === stock || stock === 0 ? "text-red-700" : ""}`}
        >
          {inCart === stock || stock === 0
            ? "No hay más stock"
            : "En stock: " + (stock - inCart)}
        </p>

        <p className="text-2xl font-semibold text-gray-200">${product.price}</p>

        <ItemCount
          stock={product.stock}
          initial={0}
          inCart={inCart}
          globalAmountAdded={amountAdded}
          onAmountChange={onAmountChange}
        />
        <button
          disabled={amountAdded === 0}
          onClick={handleAddToCart}
          className={`${
            amountAdded === 0
              ? "bg-zinc-500 hover:bg-zinc-600 focus:bg-zinc-600 active:bg-zinc-600"
              : "bg-[#0081a3] focus:bg-[#5ca3b7] active:bg-[#5ca3b7]"
          } text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200`}
        >
          Agregar al carrito
        </button>
        <p className="text-lg mt-4">{product.description}</p>
      </div>
    </PageLayout>
  );
};
