export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/categories", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
