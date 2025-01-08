import Home from "@/Components/Home";


export default async function page() {

  let data;

  try {

    const [categoriesData, subCategoriesData, duaData] = await Promise.all([
      fetch('http://localhost:5000/api/categories'),
      fetch('http://localhost:5000/api/sub_categories'),
      fetch('http://localhost:5000/api/dua'),
    ]);

    const [categories, subCategories, dua] = await Promise.all([
      categoriesData.json(),
      subCategoriesData.json(),
      duaData.json(),
    ]);

    data = { categories, subCategories, dua };

  }
  catch (error) {
    console.error("Error fetching data:", error);
  }



  return (
    <Home data={data} />

  );
}




