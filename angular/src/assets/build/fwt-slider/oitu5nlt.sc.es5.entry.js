FwtSlider.loadBundle("oitu5nlt",["exports"],function(e){var t=window.FwtSlider.h,n=function(){function e(){}return e.prototype.valueChangedHandler=function(e){this.valueChanged.emit(e.target.value)},e.prototype.render=function(){var e=this;return t("div",{class:"slider-container"},t("p",null,'"@stencil/core": "0.16.1", "@stencil/router": "0.3.1"'),t("input",{type:"range",min:this.min,max:this.max,value:this.value,class:"slider",onChange:function(t){return e.valueChangedHandler(t)}}))},Object.defineProperty(e,"is",{get:function(){return"fwt-slider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},value:{type:Number,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"valueChanged",method:"valueChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".slider,.slider-container{width:100%}.slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:15px;border-radius:5px;background:#d3d3d3;outline:none;opacity:.7;-webkit-transition:opacity .2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#4caf50;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4caf50;cursor:pointer}"},enumerable:!0,configurable:!0}),e}();e.FwtSlider=n,Object.defineProperty(e,"__esModule",{value:!0})});