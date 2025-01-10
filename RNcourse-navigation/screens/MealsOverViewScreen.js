import { useEffect, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route, navigation }) => {
  // Screen으로 등록되어 있지 않은 컴포넌트에서 route를 사용하기 위한 방법
  //   const route = useRoute();
  //   route.params;

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        mealId: item.id,
      });
    };

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
