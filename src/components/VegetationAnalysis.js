const VegetationAnalysis = ({ task, changeLayer1, showLayer }) => {
  var arrays = [
    {
      ndvidates: [200, 300],
      soil_moisture_dates: [200, 300],
      et_dates: [200, 300],
    },
  ];

  return (
    <div>
      <div className="LayerTree">
        <p>Dataset</p>
      </div>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        <option value="ndvi">Modis NDVI</option>
        <option value="et">MODIS ET</option>
        <option value="smap">Soil Moisture (SMAP)</option>
      </select>
      <div className="LayerTree">
        <p>Operations</p>
      </div>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        <option value="Anomaly">Anomaly</option>
        <option value="Difference">Difference</option>
        <option value="Maximum">Maximum</option>
        <option value="Minimum">Minimum</option>
        <option value="sd">Standard Deviation</option>
        <option value="trend">Trend</option>
        <option value="vci">Vegetation Condition Analysis(VCI)</option>
        <option value="threshold">Long Term Threshold</option>
        <option value="rgb">RGB</option>
      </select>
      <div className="LayerTree">
        <p>Dates</p>
      </div>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        {arrays[0].ndvidates.map((task, index) => (
          <option key={index} value={task}>
            {task}
          </option>
        ))}
      </select>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        {arrays[0].ndvidates.map((task, index) => (
          <option key={index} value={task}>
            {task}
          </option>
        ))}
      </select>
      <div className="LayerTree">
        <p>Mask</p>
      </div>
      <select onChange={(event) => changeLayer1(event.target.value, showLayer)}>
        <option value="none">None</option>
        <option value="forest">Forest</option>
        <option value="agriculture">Agriculture</option>
      </select>
    </div>
  );
};

export default VegetationAnalysis;
