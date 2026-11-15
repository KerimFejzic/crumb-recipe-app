export type RecipeCategory = 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert';

export type Recipe = {
  id: string;
  name: string;
  category: RecipeCategory;
  cookingTime: number; // minutes
  servings: number;
  photoUrl: string;
  ingredients: string[];
  instructions: string[];
  isFavorite: boolean;
  notes?: string;
};
