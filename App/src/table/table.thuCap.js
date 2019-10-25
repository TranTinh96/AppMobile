import React, {Component} from 'react';
import {Container} from "native-base"
import {ScrollView,View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from "../../assets/styles/styles.screen"

export default class thuCap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'SP_Temperature', 'Temperature', 'SP_High', 'SP_Low', 'Level', 'SP_Time', 'Time', 'Date'],
      widthArr: [50, 130, 120, 100, 100, 100, 100, 100, 200]
    }
  }
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      rowData.push(`${i}`);
      for (let j = 0; j < 8; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
    return (
      <Container style={styles.background}>
         <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#fafafa'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

