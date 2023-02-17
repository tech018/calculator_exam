import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Calculator from "./src/screens/Calculator";
import Dashboard from "./src/screens/Dashboard";
import { Styles } from "./src/styles/global";
import { useCallback } from "react";

export interface CalculateData {
  _id: string;
  calculations: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export default function App() {
  const [showCalculator, setShowCalculator] = useState<Boolean>(false);
  const [showDashboard, setShowDashboard] = useState<Boolean>(true);
  const [data, setData] = useState<Array<CalculateData>>([]);
  useEffect(() => {
    getAllCalculations();
  }, []);

  const getAllCalculations = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/calculator", {
        method: "GET",
        headers: {
          x_api_key:
            "NG3m6FdD7qKR8jjVnByE5sH5Wjuu9VW7bRqZh4AtKcKpjQHsZUQkdMd6QuCVCs5EqW6spHfeJQCp6JCvd87ptEghqMTvBTFtvLuEX6f3UJfZc8u8xtCmPhPbBU48bjxCuH2mjsFdKBAcjEXY5D82gmEQDy3CtXNhu63WNZwbLUswTng4NFqY6cVwDGL2udAhrJwgxJMmsUehqpJL92ZuHAqAyzeMambZBj4MucP3hDn4HrPgCCa6XUB4vj5NjbBf",
        },
      });
      const json = await response.json();
      const { data } = json;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View style={Styles.container}>
      {showDashboard && (
        <Dashboard
          data={data}
          setData={setData}
          setShowDashboard={setShowDashboard}
          setShowCalculator={setShowCalculator}
        />
      )}
      {showCalculator && (
        <Calculator
          setData={setData}
          setShowDashboard={setShowDashboard}
          setShowCalculator={setShowCalculator}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
