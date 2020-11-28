/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionInnerContainer1Section}>
              <View style={styles.sectionInnerContainer1}>
                <View style={styles.bgBox} />
                <Text style={styles.textStyle}>Name</Text>
                <View style={styles.bgBox} />
              </View>
            </View>
            <View style={styles.sectionInnerContainer2Section}>
              <View style={styles.sectionInnerContainer2}>
                <Text style={styles.textStyle}>Balance</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#081c1a',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    width: 280,
    height: 280,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  sectionInnerContainer1Section: {
    backgroundColor: '#f7f7fe',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  sectionInnerContainer1: {
    width: 280,
    height: 140,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sectionInnerContainer2Section: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  sectionInnerContainer2: {
    width: 280,
    height: 140,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#f7f7fe',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bgBox: {
    backgroundColor: '#081c1a',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.dark,
  },
});

export default App;
