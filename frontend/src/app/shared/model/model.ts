export interface RecipeSearchResult {
  count: number;
  from: number;
  hits: { bookmarked: boolean, bought: boolean, recipe: Recipe }[];
  more: boolean;
  to: number;
  q: string;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  calories: number;
  totalWeight: number;
  ingredients: Ingredient[];
  totalNutrients: { string: NutrientInfo };
  totalDaily: { string: NutrientInfo };
  dietLabels: DietLabel[];
  healthLabels: HealthLabel[];
}

export interface Ingredient {
  foodId: string;
  quantity: number;
  measure: Measure;
  weight: number;
  food: Food;
  foodCategory: string;
}

export interface NutrientInfo {
  uri: string;
  label: string;
  quantity: number;
  unit: string;
}

export interface Measure {
  uri: string;
  label: string;
}

export interface Food {
  foodId: string;
  label: string;
}

export enum DietLabel {
  Balanced = 'BALANCED',
  High_protein = 'HIGH_PROTEIN',
  High_fiber = 'HIGH_FIBER',
  Low_fat = 'LOW_FAT',
  Low_carb = 'LOW_CARB',
  Low_sodium = 'LOW_SODIUM',
}

export enum HealthLabel {
  Vegan = 'VEGAN',
  Vegetarian = 'VEGETARIAN',
  Paleo = 'PALEO',
  Dairy_free = 'DAIRY_FREE',
  Gluten_free = 'GLUTEN_FREE',
  Wheat_free = 'WHEAT_FREE',
  Fat_free = 'FAT_FREE',
  Low_sugar = 'LOW_SUGAR',
  Egg_free = 'EGG_FREE',
  Peanut_free = 'PEANUT_FREE',
  Tree_nut_free = 'TREE_NUT_FREE',
  Soy_free = 'SOY_FREE',
  Fish_free = 'FISH_FREE',
  Shellfish_free = 'SHELLFISH_FREE',
}
