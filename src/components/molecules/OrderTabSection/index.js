import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy4}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy5}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy6}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy7}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy8}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy9}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop Bumil"
      />
    </View>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy9}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy8}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy7}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy6}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy5}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy4}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
      />
      <ItemListFood
        rating
        onPress={() => navigation.navigate('FoodDetail')}
        image={foodDummy3}
        type="past-order"
        items={2}
        price="300.000"
        name="Sop Bumil"
        date="12 June, 14:00"
        status="Cancelled"
      />
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

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'one', title: 'In Progress'},
    {key: 'towe', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    one: InProgress,
    towe: PastOrder,
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

export default OrderTabSection;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});
