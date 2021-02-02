import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  foodDummy1,
  foodDummy2,
  foodDummy4,
  foodDummy5
} from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';

const Home = () => {
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
   <View style={styles.page}>
   <HomeProfile/>
     <View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View style={styles.foodCardContainer}>
           <Gap width={24} />
           <FoodCard image={foodDummy1} />
           <FoodCard image={foodDummy4} />
           <FoodCard image={foodDummy2} />
           <FoodCard image={foodDummy5} />
         </View>
       </ScrollView>
     </View>
     <HomeTabSection />
   </View>
   </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
  foodCardContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
