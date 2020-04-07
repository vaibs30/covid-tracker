import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import { Surface, DataTable } from 'react-native-paper';
import InitialPropsHelper from '../utils/getInitialProps';
import { Ionicons } from '@expo/vector-icons';

const APIurl = 'https://api.covid19india.org/data.json';

const resolveFunc = async () => { 
  fetch(APIurl)
  .then(response => response.json())
  .then(response => {
      const nationData = response;
  });
  return InitialPropsHelper({
    nationData,
  });
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { nationData: props.nationData};
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
                  <Text style={{ padding: 5}}>
                    Helpline : Please call +91-11-23978046 if you face any covid-19 symptoms such as Cough, Cold, 
                    Sneeze etc
                  </Text>
                </View>
            </Surface>
            {this.state.nationData !== undefined ? (
              <Surface
              elevation={0}
              style={{
                backgroundColor: '#C6F6D5',
                margin: 7,
                fontSize: 12,
                borderColor: 'blue',
                borderRadius: 6,
              }}>
          <DataTable style={{ justifyContent: 'space-evenly' }}>
              <DataTable.Header>
              <DataTable.Title numeric>CONFIRMED</DataTable.Title>
              <DataTable.Title numeric>ACTIVE</DataTable.Title>
              <DataTable.Title numeric>RECOVERED</DataTable.Title>
              <DataTable.Title numeric>DEATH</DataTable.Title>
          </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell numeric>{this.state.nationData.cases_time_series[11].totalconfirmed}</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
          <DataTable.Cell numeric>{this.state.nationData.cases_time_series[11].totalrecovered}</DataTable.Cell>
          <DataTable.Cell numeric>{this.state.nationData.cases_time_series[11].totaldeceased}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
            </Surface>
            ) : (
              null
            )
            }
        </View>
       );
   }
}

export default HomeScreen;
