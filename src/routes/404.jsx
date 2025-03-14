import { PageLayout } from "../layouts/PageLayout"

export const NotFound = () => {
    document.title = "Página no encontrada - ReactClothes";
    return (
        <PageLayout title="Página no encontrada" is404/>
    )
}