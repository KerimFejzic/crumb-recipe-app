import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Recipe } from '@/types';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Open ${recipe.name}`}
      onPress={() => console.log('Open recipe:', recipe.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: recipe.photoUrl }} style={styles.photo} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>{recipe.name}</Text>
          <Text style={styles.heart}>{recipe.isFavorite ? '♥' : '♡'}</Text>
        </View>
        <Text style={styles.details}>
          {recipe.category} · {recipe.cookingTime} min · Serves {recipe.servings}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#f1f1f1', borderWidth: 1, borderColor: '#ddd' },
  pressed: { opacity: 0.6 },
  photo: { width: '100%', height: 160, backgroundColor: '#e1e1e1' },
  content: { padding: 14, gap: 6 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  title: { flex: 1, fontSize: 18, fontWeight: '700', color: '#222' },
  heart: { fontSize: 24, color: '#444' },
  details: { fontSize: 13, color: '#666' },
});
