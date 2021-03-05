import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';
import ItemListFood from '../ItemListFood';

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24, backgroundColor: ''}}>
      {newTaste.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const NewPopular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            rating={item.rate}
            onPress={() => navigation.navigate('FoodDetail')}
            image={{uri: item.picturePath}}
            name={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const NewRecommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            rating={item.rate}
            onPress={() => navigation.navigate('FoodDetail')}
            image={{uri: item.picturePath}}
            name={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#020202'}}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
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
        style={{backgroundColor: 'white'}}
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
