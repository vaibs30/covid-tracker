import React, { Component } from 'react';
import {
  Text, View, ScrollView,
} from 'react-native';
import { Surface, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const APIurl = 'https://api.covid19india.org/data.json';

class StateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { stateData: props.nationData};
}
  UNSAFE_componentWillMount() {
    fetch(APIurl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                nationData : response,
            })
        });
}
    render() {
      const { nationData } = this.state;
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
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ionicons
                  name="ios-information-circle-outline"
                  size={30}
                />
                  <Text style={{ padding: 10}}>
                    Helpline : Please call +91-11-23978046 immediately if you face any covid-19 symptoms such as Cough, Cold, 
                    Sneeze etc
                  </Text>
                </View>
            </Surface>
            {nationData !== undefined ? (
              <Surface
              elevation={0}
              style={{
                backgroundColor: '#C6F6D5',
                padding: 10,
                margin: 7,
                fontSize: 12,
                borderColor: 'blue',
                borderRadius: 6,
                flex: 1,
               // flexDirection: 'row',
                // justifyContent: 'space-evenly',
              }}>
              <ScrollView style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row',
                    marginTop: 5, padding: 5 }}>
                  <Text style={{ flex: 0.4, color: '#22543D' }}>State</Text>
                    <Text style={{ flex: 0.3, color: '#742A2A' }}>Confirmed</Text>
                    <Text style={{ flex: 0.2, color: '#742A2A' }}>Active</Text>
                    <Text style={{ flex: 0.3, color: '#22543D' }}>Recovered</Text>
                    <Text style={{ flex: 0.2, color: '#744210' }}>Death</Text>
                  </View>
                  <Divider />
                  <View>
                  {nationData.statewise.map((b) => (
                    <View key={b.statecode} style={{ flexDirection: 'row', marginTop: 5, padding: 5 }}>
                        <Text style={{ flex: 0.4 }} numberOfLines={2}>{b.state}</Text>
                        <Text style={{ flex: 0.3 }}>{b.confirmed}</Text>
                        <Text style={{ flex: 0.2 }}>{b.active}</Text>
                        <Text style={{ flex: 0.3 }}>{b.recovered}</Text>
                        <Text style={{ flex: 0.2 }}>{b.deaths}</Text>
                    </View>
                        ))}
                  </View>
              </ScrollView>
            </Surface>
            ) : (
              null
            )
            }
        </View>
       );
   }
}

export default StateScreen;
