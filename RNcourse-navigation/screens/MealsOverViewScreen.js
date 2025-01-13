import { useEffect, useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealsList/MealsList";

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

  return <MealList items={displayedMeals} />;
};

export default MealsOverViewScreen;
