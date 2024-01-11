// App.js
import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData, DistrictData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Data Penduduk Kota Malang",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [districtData, setDistrictData] = useState({
    labels: DistrictData.map((data) => data.district),
    datasets: [
      {
        label: "Data Penduduk per Kecamatan",
        data: DistrictData.map((data) => data.population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Kependudukan Kota Malang</h1>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
    <div style={{ width: '50%', marginRight: '25px' }}>
      <BarChart chartData={userData} />
    </div>
    <div style={{ width: '50%' }}>
      <LineChart chartData={userData} />
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ width: '40%', marginRight: '25px' }}>
      <PieChart chartData={userData} />
    </div>
    <div style={{ width: '50%' }}>
      <BarChart chartData={districtData} />
    </div>
  </div>
</div>


      <footer className="App-footer">
        <h4>Faradisha Aldina Putri | Politeknik Negeri Malang</h4>
      </footer>
    </div>
  );
}

export default App;
