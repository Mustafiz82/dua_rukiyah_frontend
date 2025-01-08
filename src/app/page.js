import Home from "@/Components/Home";

export default async function page() {
  let data = {
    categories: [],
    subCategories: [],
    dua: [],
  };

  try {
    const [categoriesData, subCategoriesData, duaData] = await Promise.all([
      fetch('http://dua-rukiyah-backend.onrender.com/api/categories'),
      fetch('http://dua-rukiyah-backend.onrender.com/api/sub_categories'),
      fetch('http://dua-rukiyah-backend.onrender.com/api/dua'),
    ]);

    const [categories, subCategories, dua] = await Promise.all([
      categoriesData.json(),
      subCategoriesData.json(),
      duaData.json(),
    ]);

    data = { categories, subCategories, dua };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Log the error or provide fallback values if needed
  }

  return <Home data={data} />;
}
