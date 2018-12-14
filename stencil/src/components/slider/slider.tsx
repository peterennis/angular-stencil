import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fwt-slider',
  styleUrl: 'slider.css'
})
export class SliderComponent {

  @Prop() min: number;
  @Prop() max: number;
  @Prop() value: number;

  @Event() valueChanged: EventEmitter;

  valueChangedHandler(event: any) {
    this.valueChanged.emit(event.target.value);
  }

  render() {
    return (
      <div class="slider-container">
        <p>"@stencil/core": "0.16.1", "@stencil/router": "0.3.1"</p>
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider" onChange={(event) => this.valueChangedHandler(event)}></input>
      </div>
    );
  }
}