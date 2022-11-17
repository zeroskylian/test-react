import React, { FormEvent } from "react";

export enum TemperatureType {
  Celsius,
  Fahrenheit,
}

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (arg: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface TemperatureProps {
  type: TemperatureType;
  temperature: string;
  onTemperatureChange: (arg: string) => void;
}

class TemperatureInput extends React.Component<TemperatureProps> {
  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(event.currentTarget.value);
  };

  render() {
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export class Calculator extends React.Component {
  state: Pick<TemperatureProps, "type" | "temperature"> = {
    type: 0,
    temperature: "",
  };

  handleCelsiusChange = (temperature: string) => {
    this.setState({ type: 0, temperature: temperature });
  };

  handleFahrenheitChange = (temperature: string) => {
    this.setState({ type: 1, temperature: temperature });
  };

  render(): React.ReactNode {
    const type = this.state.type;
    const temperature = this.state.temperature;
    const celsius =
      type === 1 ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      type === 0 ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          type={0}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          type={1}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
