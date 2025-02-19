import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import { getCategoryDataBySlug } from '../hooks';
import { useEffect, useState } from 'react';
import { NotFound } from '../routes';

export const CategoryPage = () => {
    const { slug } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchCategory = async () => {
            setLoading(true); 
            const categoryData = await getCategoryDataBySlug(slug);
            console.log(categoryData);
            setCategory(categoryData);
            setLoading(false);
        };

        fetchCategory();
    }, [slug]);

    if (loading) {
        return (
            <main className="w-full h-full flex flex-col items-center pt-36">
                <img width={64} height={64} className="grayscale" alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
                <h1 className="text-2xl font-bold text-[#0081a3]">ReactClothes, vestite con React!</h1>
                <h2 className="text-xl font-bold text-[#0081a3]">Cargando categoría...</h2>
            </main>
        );
    }

    if (!category) {
        return (
            <NotFound/>
        );
    }

    return (
        <main className="w-full h-full flex flex-col items-center pt-36">
            <img width={64} height={64} className="grayscale" alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
            <h1 className="text-2xl font-bold text-[#0081a3]">ReactClothes, vestite con React!</h1>
            <h2 className="text-xl">Categoría - <strong className="text-[#0081a3]">{category.name}</strong></h2>
            <ItemListContainer categoryId={category.id} />
        </main>
    );
};
