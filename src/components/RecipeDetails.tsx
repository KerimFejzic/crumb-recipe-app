import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Recipe } from '@/types';

type RecipeDetailsProps = { recipe: Recipe };

// Lab 4: a reusable details component. Navigation to it comes in a later lab.
export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={{ uri: recipe.photoUrl }} style={styles.photo} resizeMode="cover" />
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.meta}>{recipe.category} · {recipe.cookingTime} min · Serves {recipe.servings}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, i) => (
        <Text key={`${i}-${ingredient}`} style={styles.item}>• {ingredient}</Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.instructions.map((instruction, i) => (
        <View key={i} style={styles.step}>
          <Text style={styles.stepNumber}>{i + 1}.</Text>
          <Text style={styles.stepText}>{instruction}</Text>
        </View>
      ))}
      {recipe.notes ? (
        <>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.item}>{recipe.notes}</Text>
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 48, gap: 9 },
  photo: { width: '100%', height: 210, borderRadius: 12, backgroundColor: '#eee' },
  name: { fontSize: 26, fontWeight: '700', color: '#222', marginTop: 9 },
  meta: { fontSize: 14, color: '#666' },
  sectionTitle: { fontSize: 19, fontWeight: '700', marginTop: 18, color: '#222' },
  item: { fontSize: 16, color: '#333', lineHeight: 25 },
  step: { flexDirection: 'row', gap: 10 },
  stepNumber: { fontSize: 16, fontWeight: '700', color: '#555' },
  stepText: { flex: 1, fontSize: 16, lineHeight: 24, color: '#333' },
});
