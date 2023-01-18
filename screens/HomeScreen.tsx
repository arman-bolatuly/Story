import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';

import Spacing from '../constants/Spacing';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { categories, products, user } from '../data';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // const person = {
  //   fullName: 'Arman Bolatuly',
  //   image: require('../assets/images/user/avatar.png')
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: Spacing * 2, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', paddingTop: 7 }}>
            <Image source={user.image} />
            <Text
              style={{
                backgroundColor: '#fff',
                color: 'black',
                fontSize: 20,
                marginLeft: 5
              }}>
              Hi, {user.name}!
            </Text>
          </View>
          <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ padding: Spacing / 2 }}>
              <Ionicons name="search-outline" size={Spacing * 3} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: Spacing / 2 }}>
              <Ionicons name="cart-outline" size={Spacing * 3} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: Spacing }}
        >
          <View style={{ paddingVertical: Spacing * 4, backgroundColor: '#fff' }}>
            <Text style={{ color: 'black', fontSize: Spacing * 3.5 }}>
              Explore the best
              <Text style={{ color: 'green' }}>
                {' '}Collections{' '}
              </Text>
              for you
            </Text>
          </View>
          <View style={{ backgroundColor: '#fff' }}>
            <Text style={{ color: 'black', fontSize: Spacing * 2, marginRight: Spacing, }}>Categories</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingVertical: Spacing }}
            >
              {
                [{ id: 0, name: 'All' }, ...categories].map((category, index) => (
                  <TouchableOpacity
                    style={[{
                      paddingHorizontal: Spacing * 2,
                      paddingVertical: Spacing / 2,
                      borderWidth: 1,
                      borderRadius: Spacing * 2,
                      borderColor: 'grey',
                      marginRight: Spacing,
                    },
                    activeCategory === index && { backgroundColor: 'green' },
                    ]}
                    key={category.id}
                    onPress={() => setActiveCategory(index)}
                  >
                    <Text style={{ color: activeCategory === index ? "white" : "black", fontSize: Spacing * 1.4 }}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', alignItems: 'center' }}>
                <Text style={{ color: 'black', backgroundColor: 'white', fontSize: Spacing * 2 }}>Popular</Text>
                <TouchableOpacity style={{ paddingVertical: Spacing }}>
                  <Text style={{ color: 'black', backgroundColor: '#fff', fontSize: Spacing * 1.6 }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                  products.map(product => (
                    <TouchableOpacity key={product.id} style={{ marginVertical: Spacing }}
                      onPress={() =>
                        navigate("Product-detail", { product: product })
                      }
                    >
                      <Image source={product.image} style={{ width: 160, height: 250, borderRadius: Spacing * 2 }} />
                      <Text style={{ fontSize: Spacing * 1.4, color: 'black', backgroundColor: '#fff', marginVertical: Spacing }}>
                        {product.name}
                      </Text>
                      <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: Spacing * 1.4, color: 'black', backgroundColor: '#fff' }}>{product.price}</Text>
                        <View style={{ width: Spacing / 2, height: Spacing / 2, backgroundColor: 'grey', borderRadius: Spacing / 4, marginHorizontal: Spacing }} />
                        <Text style={{ fontSize: Spacing * 1.4, color: 'black', backgroundColor: '#fff' }}>{product.brand}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </SafeAreaView >
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
