import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';
import ItemListFood from '../ItemListFood';

const InProgress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {inProgress} = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, []);

  console.log('get in progress: ', inProgress);

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              onPress={() => navigation.navigate('OrderDetail', order)}
              image={{uri: order.food.picturePath}}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, []);

  console.log('get post progress: ', pastOrders);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {pastOrders.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="past-order"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
              date={order.created_at}
              status={order.status}
            />
          );
        })}
      </View>
    </ScrollView>
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
