const jsonDb = "/data.json"

export async function getCategoryDataBySlug(slug) {
    const response = await fetch(jsonDb);
    const data = await response.json();
    const category = data.categories.find(category => category.slug === slug);
    return category ? {
        name: category.name,
        id: category.id
    } : null;
}

export async function getProductListByCategoryId(categoryId) {
    const response = await fetch(jsonDb);
    const data = await response.json();
    const products = data.items.filter(item => item.categoryId === categoryId);
    return products ? products : [];
}

export async function getFullProductList() {
    const response = await fetch(jsonDb);
    const data = await response.json();
    return data.items;
}

export async function getItemDetailById(id) {
    const response = await fetch(jsonDb);
    const data = await response.json();
    const item = data.items.find(item => item.id === id);
    return item ? item : null;
}