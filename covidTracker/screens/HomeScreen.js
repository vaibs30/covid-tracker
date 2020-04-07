import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import { Surface, DataTable, Divider, Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const APIurl = 'https://api.covid19india.org/data.json';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationData: props.nationData,
      index: 0,
    };
}
  UNSAFE_componentWillMount() {
    fetch(APIurl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                nationData : response,
                index: response.cases_time_series.length
            })
        });
}
    render() {
      const { nationData, index } = this.state;
        return (
          <View style={{ flex: 1 }}>
            <Surface
              elevation={0}
              style={{
                backgroundColor: '#C6F6D5',
                margin: 7,
                fontSize: 12,
                borderColor: 'blue',
                borderRadius: 6,
                marginTop: 20,
              }}
            >
                <View style={{ padding: 15,
                 flexDirection: 'row', justifyContent: 'flex-start',
                  alignItems: 'center' }}>
                <Ionicons
                  name="ios-information-circle-outline"
                  size={30}
                />
                  <Text style={{ padding: 10}}>
                    Helpline : Please call +91-11-23978046 immediately if you face any covid-19 symptoms such as Cough, Cold, 
                    Sneeze etc
                  </Text>
                </View>
                <Divider />
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>
                    COVID-19 TRACKER FOR INDIA
                  </Text>
                </View>
            </Surface>
            {this.state.nationData && index !== undefined ? (
              <View>
              <Surface
              elevation={0}
              style={{
                backgroundColor: '#C6F6D5',
                margin: 10,
                fontSize: 12,
                borderRadius: 6,
              }}>
                <View style={{ padding: 15,
                  flexDirection: 'row', justifyContent: 'center',
                  alignItems: 'center', backgroundColor: '#90CDF4', borderTopStartRadius: 6, borderTopEndRadius: 6 }}>
                  <Text style={{ fontSize: 16 }}> Last Updated at: </Text>
                  <Text style={{ fontSize: 15 }}>{nationData.statewise[0].lastupdatedtime}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#F56565' }}>CONFIRMED</Text>
                    <View style={{ borderWidth: 0, borderRadius: 50, margin: 10, backgroundColor: '#F56565' }}>
                    <Text style={{ padding: 20, fontSize: 18, color: '#fff' }}>{nationData.statewise[0].confirmed}</Text>
                   </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#E53E3E' }}>ACTIVE</Text>
                    <View style={{ borderWidth: 0, borderRadius: 50, margin: 10, backgroundColor: '#E53E3E' }}>
                    <Text style={{ padding: 20, fontSize: 18, color: '#fff' }}>{nationData.statewise[0].active}</Text>
                   </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#276749' }}>RECOVERED</Text>
                    <View style={{ borderWidth: 0, borderRadius: 50, margin: 10, backgroundColor: '#276749' }}>
                    <Text style={{ padding: 20, fontSize: 18, color: '#fff' }}>{nationData.statewise[0].recovered}</Text>
                   </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: '#B7791F' }}>DEATHS</Text>
                    <View style={{ borderWidth: 0, borderRadius: 50, margin: 10, backgroundColor: '#B7791F' }}>
                    <Text style={{ padding: 20, fontSize: 18, color: '#fff' }}>{nationData.statewise[0].deaths}</Text>
                   </View>
                  </View>
                </View>
            </Surface>
              </View>
            ) : (
              null
            )
            }
        </View>
       );
   }
}

export default HomeScreen;
