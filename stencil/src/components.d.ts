/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface FwtSlider {
    /**
    * The max number
    */
    'max': number;
    /**
    * The min number
    */
    'min': number;
    /**
    * The number
    */
    'value': number;
  }
  interface FwtSliderAttributes extends StencilHTMLAttributes {
    /**
    * The max number
    */
    'max'?: number;
    /**
    * The min number
    */
    'min'?: number;
    'onValueChanged'?: (event: CustomEvent) => void;
    /**
    * The number
    */
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'FwtSlider': Components.FwtSlider;
  }

  interface StencilIntrinsicElements {
    'fwt-slider': Components.FwtSliderAttributes;
  }


  interface HTMLFwtSliderElement extends Components.FwtSlider, HTMLStencilElement {}
  var HTMLFwtSliderElement: {
    prototype: HTMLFwtSliderElement;
    new (): HTMLFwtSliderElement;
  };

  interface HTMLElementTagNameMap {
    'fwt-slider': HTMLFwtSliderElement
  }

  interface ElementTagNameMap {
    'fwt-slider': HTMLFwtSliderElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
