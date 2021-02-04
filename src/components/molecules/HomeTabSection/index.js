import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  foodDummy1,
  foodDummy2,
  foodDummy3,
  foodDummy4,
  foodDummy5,
  foodDummy6,
  foodDummy7,
  foodDummy8,
  foodDummy9,
} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy3} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy4} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy5} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy6} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy7} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy8} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy9} />
    </View>
  );
};

const NewPopular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy5} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy2} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy6} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy4} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy7} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy1} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy9} />
    </View>
  );
};

const NewRecommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy9} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy8} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy7} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy6} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy5} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy4} />
      <ItemListFood onPress={() => navigation.navigate('FoodDetail')} image={foodDummy3} />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#020202'}}
    style={{backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'one', title: 'New Taste'},
    {key: 'towe', title: 'Popular'},
    {key: 'three', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    one: NewTaste,
    towe: NewPopular,
    three: NewRecommended,
  });

  return (
    <View style={styles.tabContainer}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});
