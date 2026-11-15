import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import type { RecipeCategory } from '@/types';

const categories: Array<'All' | RecipeCategory> = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'All' | RecipeCategory>('All');

  const visibleRecipes = useMemo(() => recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCategory = category === 'All' || recipe.category === category;
    return matchesSearch && matchesCategory;
  }), [search, category]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Crumb</Text>
      <Text style={styles.subtitle}>Your recipe collection</Text>
      <TextInput
        style={styles.search}
        placeholder="Search recipes..."
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
        accessibilityLabel="Search recipes"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
        {categories.map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategory(item)}
            style={[styles.chip, category === item && styles.activeChip]}
          >
            <Text style={[styles.chipText, category === item && styles.activeChipText]}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={styles.count}>{visibleRecipes.length} {visibleRecipes.length === 1 ? 'recipe' : 'recipes'}</Text>
      <View style={styles.cards}>
        {visibleRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        {visibleRecipes.length === 0 ? <Text style={styles.empty}>No recipes found.</Text> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16, paddingBottom: 40, gap: 12, width: '100%', maxWidth: 650, alignSelf: 'center' },
  heading: { fontSize: 30, fontWeight: '800', color: '#222' },
  subtitle: { fontSize: 14, color: '#777', marginTop: -8 },
  search: { borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 },
  categories: { gap: 8, paddingVertical: 2 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1, borderColor: '#ddd', borderRadius: 18 },
  activeChip: { backgroundColor: '#555', borderColor: '#555' },
  chipText: { color: '#444', fontSize: 13 },
  activeChipText: { color: '#fff' },
  count: { fontSize: 15, color: '#666', fontWeight: '600' },
  cards: { gap: 14 },
  empty: { fontSize: 16, textAlign: 'center', paddingTop: 32, color: '#888' },
});
