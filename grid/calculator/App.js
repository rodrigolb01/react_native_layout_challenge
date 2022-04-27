import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import { evaluate } from 'mathjs';
// import  Row  from './src/components/Row';
import  Button  from './src/components/Button';
import { Col, Row, Grid } from "react-native-easy-grid"

export default function App() {
  const [input, setInput] = useState(' ');
  let operants = [];
  let operators = [];
  let temp = [];

  const closeInput = () => {
    let op = temp.join('');
    operants.push( isNaN(parseFloat(op)) ? 0 : parseFloat(op) )
    temp = [];
  }

  const calculate = () => {
    let res = operants[0];

    for(let i=1; i< operants.length; i++)
    {
      switch(operators[i-1])
      {
        case '/' : res = evaluate(`${res} / ${operants[i]}`) ;break;
        case '*' : res = evaluate(`${res} * ${operants[i]}`) ;break;
        case '-' : res = evaluate(`${res} - ${operants[i]}`) ;break;
        case '+' : res = evaluate(`${res} + ${operants[i]}`) ;break;
        default : break;
      }
    };
    setInput(res.toString());
  }

  const setup = () => {
    [...input].forEach( e => {
      if(e !== '/' &&
         e !== '*' &&
         e !== '-' &&
         e !== '+' ) 
      {
        temp.push(e);
      }
      else if(e === '/' ||
              e === '*' ||
              e === '-' ||
              e === '+')
      {
        operators.push(e);
        closeInput();
      }
    });
    operators.push('=');
    closeInput();
    calculate();
  }


  const onKey1Push = () => {
    setInput(input + '1');
  }

  const onKey2Push = () => {
    setInput(input + '2');
  }

  const onKey3Push = () => {
    setInput(input + '3');
  }

  const onKey4Push = () => {
    setInput(input + '4');
  }

  const onKey5Push = () => {
    setInput(input + '5');
  }

  const onKey6Push = () => {
    setInput(input + '6');
  }

  const onKey7Push = () => {
    setInput(input + '7');
  }

  const onKey8Push = () => {
    setInput(input + '8');
  }

  const onKey9Push = () => {
    setInput(input + '9');
  }

  const onKey0Push = () => {
    setInput(input + '0');
  }

  const onKeyAcPush = () => {
    setInput(' ');
  }

  const onKeyDividePush = () => {
    setInput(input + '/');
  }

  const onKeyMultiplyPush = () => {
    setInput(input + '*');
  }

  const onKeySubtractPush = () => {
    setInput(input + '-');
  }

  const onKeyAddPush = () => {
    setInput(input + '+');
  }

  const onKeyDotPush = () => {
    setInput(input + '.');
  }

  const onKeyEqualsPush = () => {
    setInput(input + '=');
    setup();
  }
  const screen = Dimensions.get("window");


  return (
    <View style={styles.container}> 
      <Text style={styles.value}>
        {input}
      </Text>
      <Grid style={
        {
          marginTop : 190
        }
      }>
          <Row>
            <Button
            text="AC"
            theme="seconday"
            onPress={onKeyAcPush}
            size="double"
            />
            <Button
            text="/"
            theme="accent"
            onPress={onKeyDividePush}
            size="double"
            />
          </Row>
          <Row>
            <Button
            text="1"
            theme="seconday"
            onPress={onKey1Push}
            />
            <Button
            text="2"
            theme="seconday"
            onPress={onKey2Push}
            />
            <Button
            text="3"
            theme="seconday"
            onPress={onKey3Push}
            />
            <Button
            text="*"
            theme="accent"
            onPress={onKeyMultiplyPush}
            />
          </Row>
          <Row>
            <Button
            text="4"
            theme="seconday"
            onPress={onKey4Push}
            />
            <Button
            text="5"
            theme="seconday"
            onPress={onKey5Push}
            />
            <Button
            text="6"
            theme="seconday"
            onPress={onKey6Push}
            />
            <Button
            text="-"
            theme="accent"
            onPress={onKeySubtractPush}
            />
          </Row>
          <Row>
            <Button
            text="7"
            theme="seconday"
            onPress={onKey7Push}
            />
            <Button
            text="8"
            theme="seconday"
            onPress={onKey8Push}
            />
            <Button
            text="9"
            theme="seconday"
            onPress={onKey9Push}
            />
            <Button
            text="+"
            theme="accent"
            onPress={onKeyAddPush}
            />
          </Row>
          <Row>
            <Button
            text="0"
            theme="seconday"
            onPress={onKey0Push}
            />
          
            <Button
            text="."
            theme="seconday"
            onPress={onKeyDotPush}
            />
            <Button
            text="="
            theme="accent"
            onPress={onKeyEqualsPush}
            size="double"
            />
          </Row>
        </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#787878",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});
