import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, query, where, doc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const categoriesCollectionRef = collection(db, "categories");
export const itemsCollectionRef = collection(db, "items");
export const ordersCollectionRef = collection(db, "orders");

export async function getFullProductList() {
  try {
    const productList = [];
    const querySnapshot = await getDocs(itemsCollectionRef);
    querySnapshot.forEach((doc) => {
      productList.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return productList;
  } catch (error) {
    console.error("Error obteniendo documentos: ", error);
  }
}

export async function getCategoryDataBySlug(slug) {
  try {
    const querySnapshot = await getDocs(categoriesCollectionRef);
    let categoryData = null;
    querySnapshot.forEach((doc) => {
      const category = doc.data();
      if (category.slug === slug) {
        categoryData = {
          name: category.name,
          id: doc.id,
        };
      }
    });

    if (categoryData) {
      return categoryData;
    } else {
      throw new Error("Categoría no encontrada");
    }
  } catch (error) {
    console.error("Error obteniendo documentos: ", error);
    throw error;
  }
}

export async function getProductListByCategoryId(categoryId) {
  try {
    const q = query(itemsCollectionRef, where("categoryId", "==", categoryId));
    const querySnapshot = await getDocs(q);

    const productList = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      productList.push({
        id: doc.id,
        ...productData,
      });
    });

    return productList;
  } catch (error) {
    console.error("Error obteniendo productos por categoryId: ", error);
    throw error;
  }
}

export async function getItemDetailById(id) {
  try {
    const itemDocRef = doc(itemsCollectionRef, id);

    const docSnapshot = await getDoc(itemDocRef);

    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      };
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error obteniendo el detalle del producto: ", error);
    throw error;
  }
}

export async function sendOrderToDb(order) {
  try {
    const allItemsInStock = await Promise.all(
      order.items.map(async (item) => {
        const itemDetail = await getItemDetailById(item.id);
        return itemDetail.stock > 0;
      })
    );

    if (allItemsInStock.includes(false)) {
      throw new Error("No hay suficiente stock para completar la orden.");
    }

    const newOrderRef = await addDoc(ordersCollectionRef, {
      buyer: order.buyer,
      total: order.total,
      items: order.items,
      date: serverTimestamp(),
    });

    return newOrderRef.id;
  } catch (error) {
    console.error("Error al enviar la orden a la base de datos: ", error);
    throw error;
  }
}
