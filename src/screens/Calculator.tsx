import * as React from "react";
import Button from "../components/Buttons";
import { View, Text } from "react-native";
import { Styles } from "../styles/global";
import { CalculateData } from "../../App";

interface showDashboardProps {
  setShowDashboard: React.Dispatch<React.SetStateAction<Boolean>>;
  setShowCalculator: React.Dispatch<React.SetStateAction<Boolean>>;
  setData: React.Dispatch<React.SetStateAction<Array<CalculateData>>>;
}

const { body } = Styles;

export default function Calculator({
  setShowDashboard,
  setShowCalculator,
  setData,
}: showDashboardProps) {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const negativePositive = () => {
    if (parseInt(firstNumber) < 0) {
      setFirstNumber(`${Math.abs(parseInt(firstNumber))}`);
    } else {
      const negative = -Math.abs(parseInt(firstNumber));
      setFirstNumber(`${negative}`);
    }
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: "white" }]
              : [Styles.screenFirstNumber, { fontSize: 70, color: "white" }]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        setResult(parseInt(secondNumber) + parseInt(firstNumber));

        break;
      case "-":
        setResult(parseInt(secondNumber) - parseInt(firstNumber));

        break;
      case "x":
        setResult(parseInt(secondNumber) * parseInt(firstNumber));

        break;
      case "/":
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        setResult(0);
        break;
    }
  };

  React.useEffect(() => {
    addOperation();
  });

  const addOperation = async () => {
    if (result !== null) {
      const calculations: string = `${
        firstNumber + operation + secondNumber + `=` + result.toString()
      }`;

      await fetch("http://exam.digitalzamboanga.site/calculator", {
        method: "POST",
        body: JSON.stringify({
          calculations,
        }),
        headers: {
          x_api_key:
            "NG3m6FdD7qKR8jjVnByE5sH5Wjuu9VW7bRqZh4AtKcKpjQHsZUQkdMd6QuCVCs5EqW6spHfeJQCp6JCvd87ptEghqMTvBTFtvLuEX6f3UJfZc8u8xtCmPhPbBU48bjxCuH2mjsFdKBAcjEXY5D82gmEQDy3CtXNhu63WNZwbLUswTng4NFqY6cVwDGL2udAhrJwgxJMmsUehqpJL92ZuHAqAyzeMambZBj4MucP3hDn4HrPgCCa6XUB4vj5NjbBf",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  };

  const getAllCalculations = React.useCallback(async () => {
    try {
      const response = await fetch(
        "http://exam.digitalzamboanga.site/calculator",
        {
          method: "GET",
          headers: {
            x_api_key:
              "NG3m6FdD7qKR8jjVnByE5sH5Wjuu9VW7bRqZh4AtKcKpjQHsZUQkdMd6QuCVCs5EqW6spHfeJQCp6JCvd87ptEghqMTvBTFtvLuEX6f3UJfZc8u8xtCmPhPbBU48bjxCuH2mjsFdKBAcjEXY5D82gmEQDy3CtXNhu63WNZwbLUswTng4NFqY6cVwDGL2udAhrJwgxJMmsUehqpJL92ZuHAqAyzeMambZBj4MucP3hDn4HrPgCCa6XUB4vj5NjbBf",
          },
        }
      );
      const json = await response.json();
      const { data } = json;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const showHandler = () => {
    setShowDashboard(true);
    setShowCalculator(false);
    getAllCalculations();
  };

  return (
    <View style={body}>
      <View style={Styles.viewBottom}>
        <View
          style={{
            height: 120,
            width: "100%",
            justifyContent: "flex-end",
            alignSelf: "center",
            margin: "auto",
          }}
        >
          <Text style={Styles.screenSecondNumber}>
            {secondNumber} {secondNumber !== "" ? operation : null}{" "}
            {result !== null ? firstNumber : null}
          </Text>
          {firstNumberDisplay()}
        </View>
        <View style={Styles.row}>
          <Button title="AC" isGray onPress={clear} />
          <Button title="+/-" isGray onPress={() => negativePositive()} />
          <Button
            title="％"
            isGray
            onPress={() => handleOperationPress("％")}
          />
          <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
        </View>
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="×" isBlue onPress={() => handleOperationPress("x")} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>
        <View style={Styles.row}>
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="history" onPress={showHandler} />
          <Button title="=" isBlue onPress={() => getResult()} />
        </View>
      </View>
    </View>
  );
}
