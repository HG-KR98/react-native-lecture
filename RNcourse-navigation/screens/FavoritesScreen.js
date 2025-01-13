// import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

import MealList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  // const favoirteMealsCtx = useContext(FavoritesContext);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoirteMealsCtx.ids.includes(meal.id)
  // );
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
