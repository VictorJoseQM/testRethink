import { useState } from "react";

type Categoria = string;

export function useCategories() {
  const [categories, setCategories] = useState<Categoria[]>([]);

  function addCategory(category: Categoria) {
    if (category.trim() !== "" && !categories.includes(category)) {
      const newCategories = [...categories, category];
      setCategories(newCategories);
      return newCategories;
    } else return categories;
  }

  function removeCategory(category: Categoria) {
    const newCategories = [...categories];
    const index = newCategories.findIndex((categoria) => categoria == category);
    newCategories.splice(index);
    setCategories(newCategories);
    return newCategories;
  }

  return { categories, addCategory, removeCategory };
}
