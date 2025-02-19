import { useParams } from 'react-router-dom';
import { getItemDetailById } from '../hooks';
import { useEffect, useState } from 'react';
import { NotFound } from '../routes/';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            const productData = await getItemDetailById(id);
            setProduct(productData);
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    if (loading) return <></>;

    if (!product) return <NotFound />;

    return (
        <main className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 py-36">
            <div className="w-full md:w-1/2">
                <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-[#0081a3]">{product.name}</h1>
                <p className="text-gray-600 text-lg">{product.description}</p>
                <p className="text-2xl font-semibold text-gray-200">${product.price}</p>

                <button className="w-full bg-[#0081a3] hover:bg-[#006b85] text-white font-bold py-3 px-6 rounded-lg text-lg">
                    Comprar (Próximamente)
                </button>
            </div>
        </main>
    );
};
