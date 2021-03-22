import React, {useState} from "react";
import RcSlider from "rc-slider";
import "./slider.styles.scss";
const RcRange = RcSlider.createSliderWithTooltip(RcSlider.Range);

const Slider = () => {
  const [state, setState] = useState({})
  console.log(state)
  return (
    <div className="App">
      <RcRange
        onChange={(value) => {
          setState({ value });
        }}
        tipFormatter={(value) => `${value}`}
        tipProps={{ visible: true }}
        defaultValue={[4, 7]}
        min={3}
        max={12}
      />
    </div>
  );
}

export default Slider;