import type { Recipe } from '@/types';

// Temporary mock data for Lab 4. Supabase will replace this data source later.
export const recipes: Recipe[] = [
  {
    id: '1', name: 'Pasta Carbonara', category: 'Dinner', cookingTime: 30,
    servings: 2, photoUrl: 'https://picsum.photos/seed/crumb-carbonara/600/400',
    ingredients: ['200g pasta', '100g bacon', '2 eggs', '50g parmesan', 'Salt and pepper'],
    instructions: [
      'Cook the pasta according to the packet instructions.',
      'Fry the bacon until crispy.',
      'Mix the eggs and parmesan in a bowl.',
      'Combine the warm pasta with bacon and egg mixture, then serve.',
    ], isFavorite: true,
  },
  {
    id: '2', name: 'Banana Pancakes', category: 'Breakfast', cookingTime: 20,
    servings: 2, photoUrl: 'https://picsum.photos/seed/crumb-pancakes/600/400',
    ingredients: ['2 bananas', '2 eggs', '100g flour', '100ml milk'],
    instructions: [
      'Mash the bananas.', 'Whisk in eggs, flour and milk.',
      'Cook small pancakes in a lightly oiled pan until golden.',
    ], isFavorite: false,
  },
  {
    id: '3', name: 'Tomato Soup', category: 'Lunch', cookingTime: 25,
    servings: 4, photoUrl: 'https://picsum.photos/seed/crumb-tomato-soup/600/400',
    ingredients: ['500g tomatoes', '1 onion', '2 garlic cloves', '500ml vegetable stock'],
    instructions: [
      'Chop the vegetables.', 'Simmer everything in vegetable stock.',
      'Blend until smooth and serve warm.',
    ], isFavorite: true,
  },
  {
    id: '4', name: 'Chocolate Chip Cookies', category: 'Dessert', cookingTime: 40,
    servings: 12, photoUrl: 'https://picsum.photos/seed/crumb-cookies/600/400',
    ingredients: ['200g flour', '100g butter', '100g sugar', '100g chocolate chips', '1 egg'],
    instructions: [
      'Cream the butter and sugar.', 'Mix in the egg, then add the flour.',
      'Fold in chocolate chips and shape into cookies.',
      'Bake until golden.',
    ], isFavorite: false,
  },
  {
    id: '5', name: 'Greek Salad', category: 'Lunch', cookingTime: 10,
    servings: 2, photoUrl: 'https://picsum.photos/seed/crumb-greek-salad/600/400',
    ingredients: ['2 tomatoes', '1 cucumber', '100g feta cheese', 'Olives', 'Olive oil'],
    instructions: [
      'Wash and chop the vegetables.',
      'Add the feta and olives.',
      'Drizzle with olive oil and mix gently.',
    ], isFavorite: false,
    notes: 'Best served fresh.',
  },
];
