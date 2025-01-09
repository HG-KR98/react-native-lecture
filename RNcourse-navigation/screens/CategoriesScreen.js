import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";

// 컴포넌트가 다시 렌더링 될 때 재생성할 필요가 없으므로 컴포넌트 함수 밖에서 정의해야한다.
// const renderCategoryItem = (itemData) => {
//   const pressHandler = () => {};

//   return (
//     <CategoryGridTitle
//       title={itemData.item.title}
//       color={itemData.item.color}
//       onPress={pressHandler}
//     />
//   );
// };

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
