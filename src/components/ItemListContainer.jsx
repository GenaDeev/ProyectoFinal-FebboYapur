import { useEffect, useState } from 'react';
import { getFullProductList, getProductListByCategoryId } from '../config/firebase';
import { Item } from './';

export const ItemListContainer = ({ categoryId }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!categoryId) {
                const data = await getFullProductList();
                setItems(data);
                setLoading(false);
            }
            else {
                const data = await getProductListByCategoryId(categoryId);
                setItems(data);
                setLoading(false);
            }
        }
        fetchData();
    }, [categoryId])

    return (
        <div className="w-full flex justify-center gap-10 flex-wrap mt-4">
            {!loading ? (
                items && items.length > 0 ? (
                    items.map(item => (
                       <Item key={item.id} item={item} />
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )
            ) : (
                <p>Cargando productos...</p>
            )}

        </div>
    )
}