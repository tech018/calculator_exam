import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CalculateData } from "../../App";
import { svgIcon } from "../components/svg";
import { Styles } from "../styles/global";

const { body, titleText, svg, sectionHistory, contentEmpty, historyText } =
  Styles;

interface showDashboardProps {
  setShowDashboard: React.Dispatch<React.SetStateAction<Boolean>>;
  setShowCalculator: React.Dispatch<React.SetStateAction<Boolean>>;
  data: Array<CalculateData>;
  setData: React.Dispatch<React.SetStateAction<Array<CalculateData>>>;
}

function Dashboard({
  setShowDashboard,
  setShowCalculator,
  data,
  setData,
}: showDashboardProps) {
  const showHandler = () => {
    setShowDashboard(false);
    setShowCalculator(true);
  };

  const confirmDelete = () => {
    if (window.confirm("Delete all the item?")) {
      deleteAllCalculations();
    }
    return;
  };

  const deleteAllCalculations = async () => {
    const response = await fetch(
      "http://exam.digitalzamboanga.site/calculator",
      {
        method: "DELETE",
        headers: {
          x_api_key:
            "NG3m6FdD7qKR8jjVnByE5sH5Wjuu9VW7bRqZh4AtKcKpjQHsZUQkdMd6QuCVCs5EqW6spHfeJQCp6JCvd87ptEghqMTvBTFtvLuEX6f3UJfZc8u8xtCmPhPbBU48bjxCuH2mjsFdKBAcjEXY5D82gmEQDy3CtXNhu63WNZwbLUswTng4NFqY6cVwDGL2udAhrJwgxJMmsUehqpJL92ZuHAqAyzeMambZBj4MucP3hDn4HrPgCCa6XUB4vj5NjbBf",
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setData([]);
  };

  return (
    <View style={body}>
      <Text style={titleText}>History</Text>
      <Text onPress={confirmDelete} style={svg}>
        {svgIcon["trash"]}
      </Text>
      {data?.length > 0 ? (
        <View style={{ marginTop: 20 }}>
          {data.map((item) => (
            <View
              style={{
                backgroundColor: "#4D5057",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 2,
              }}
              key={item._id}
            >
              <Text style={{ padding: 30, ...historyText }}>
                {item.calculations}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <TouchableOpacity style={sectionHistory} onPress={showHandler}>
          <View style={contentEmpty}>
            <Text style={historyText}>Empty!</Text>
            <Text style={historyText}>Do some calulations</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Dashboard;
