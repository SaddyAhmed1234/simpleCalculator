import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Keyboard,
} from "react-native";
import NumberLine from "../components/NumberLine";

export default function CalculatorScreen() {
  const [num, setNum] = useState([]);
  const [result, setResult] = useState("");
  const [equalClicked, setEqualClicked] = useState(false);
  const [bracket, setBracket] = useState(false);

  const secNum1 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const secNum2 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const secNum3 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const trdNum1 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const trdNum2 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const trdNum3 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const forNum1 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const forNum2 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const forNum3 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const fifNum3 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  //plus click
  const forNum4 = (n) => {
    if (equalClicked === true) {
      setNum([result, "+"]);
      setEqualClicked(false);
    } else {
      if (num.length === 50) {
        return;
      } else {
        setNum([...num, n]);
      }
    }
  };

  // minus click
  const trdNum4 = (n) => {
    if (equalClicked === true) {
      setNum([result, "-"]);
      setEqualClicked(false);
    } else {
      if (num.length === 50) {
        return;
      } else {
        setNum([...num, n]);
      }
    }
  };

  const fifNum2 = (n) => {
    if (num.length === 50) {
      return;
    } else {
      setNum([...num, n]);
    }
  };

  const fifNum4 = () => {
    try {
      const allThings = num.join("");
      const result = eval(allThings.toString());
      setResult(result);
      // setNum();
    } catch (error) {
      alert("Enter correct order numbers");
    }
    setEqualClicked(true);
  };

  //multiplication click
  const secNum4 = (n) => {
    if (equalClicked === true) {
      setNum([result, "*"]);
      setEqualClicked(false);
    } else {
      if (num.length === 50) {
        return;
      } else {
        setNum([...num, n]);
      }
    }
  };
  //division click
  const firNum4 = (n) => {
    if (equalClicked === true) {
      setNum([result, "/"]);
      setEqualClicked(false);
    } else {
      if (num.length === 50) {
        return;
      } else {
        setNum([...num, n]);
      }
    }
  };

  const fifNum1 = () => {
    const newVal = num.splice(0, num.length - 1);
    setNum(newVal);
  };

  //module click
  const firNum3 = (n) => {
    if (equalClicked === true) {
      setNum([result, "%"]);
      setEqualClicked(false);
    } else {
      if (num.length === 50) {
        return;
      } else {
        setNum([...num, n]);
      }
    }
  };

  const firNum2 = () => {
    if (num.length === 50) {
      return;
    } else {
      if (bracket === true) {
        setNum([...num, ")"]);
        setBracket(false);
      } else {
        setNum([...num, "("]);
        setBracket(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          numberOfLines={1}
          maxLength={50}
          onFocus={Keyboard.dismiss}
        >
          {num.map((val) => {
            return val;
          })}
        </TextInput>
        <View style={styles.result}>
          <Text numberOfLines={2} style={{ fontSize: 30, color: "#fff" }}>
            {result}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <NumberLine
          num1={"C"}
          num2={"( )"}
          num3={"%"}
          num4={"/"}
          num1Press={() => {
            setNum([]);
            setResult("");
            setEqualClicked(false);
          }}
          num4Press={() => firNum4("/")}
          num3Press={() => firNum3("%")}
          num2Press={firNum2}
        />
        <NumberLine
          num1={7}
          num2={8}
          num3={9}
          num4={"*"}
          num1Press={() => secNum1("7")}
          num2Press={() => secNum2("8")}
          num3Press={() => secNum3("9")}
          num4Press={() => secNum4("*")}
        />
        <NumberLine
          num1={4}
          num2={5}
          num3={6}
          num4={"-"}
          num1Press={() => trdNum1("4")}
          num2Press={() => trdNum2("5")}
          num3Press={() => trdNum3("6")}
          num4Press={() => trdNum4("-")}
        />
        <NumberLine
          num1={1}
          num2={2}
          num3={3}
          num4={"+"}
          num1Press={() => forNum1("1")}
          num2Press={() => forNum2("2")}
          num3Press={() => forNum3("3")}
          num4Press={() => forNum4("+")}
        />
        <NumberLine
          num1={"CE"}
          num2={0}
          num3={"."}
          num4={"="}
          num2Press={() => fifNum2("0")}
          num4Press={fifNum4}
          num1Press={fifNum1}
          num3Press={() => fifNum3(".")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
    fontSize: 30,
    color: "#fff",
  },
  result: {
    alignSelf: "flex-end",
  },
});
