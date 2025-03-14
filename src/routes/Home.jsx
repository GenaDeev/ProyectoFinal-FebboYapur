import { ItemListContainer } from '../components';
import { PageLayout } from '../layouts/PageLayout';

export const Home = () => {
    document.title = "ReactClothes, vestite con React!";
    return (
        <PageLayout title="¿Qué vestirás?" titleColor="text-[#0081a3]">
            <ItemListContainer/>
        </PageLayout>
    )
}