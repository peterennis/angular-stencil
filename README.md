# angular-stencil
![](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

This project shows a very basic example of how to connect a web component (generated with [Stencil](https://stenciljs.com/)) and a basic [Angular 7](https://angular.io/) project.

The following steps explain how to get this working.

## Create a basic Stencil component

The idea is to have a web component that can be data-bound via properties and return its changes by custom events. For this example a simple slider component is created. We use the [stencil-component-starter](https://github.com/ionic-team/stencil-component-starter) as the template for creating our component.

**NOTE:** Stencil component testing is a new feature and **NOT** included in this integration demo.

The following code shows the `@Component` decorator. This decorator adds meta-information to your component like its selector `tag`. Our slider uses the custom element selector tag `fwt-slider` (so we can use `<fwt-slider>` later in the DOM).

```jsx
import { Component } from '@stencil/core';

@Component({
  tag: 'fwt-slider'
})
export class SliderComponent {
  ...
}
```

Stencil components are very similar to React components. They have the same lifecycle methods and of course they also need a `render` function. So let's add one:

```jsx
import { Component } from '@stencil/core';

@Component({
  tag: 'fwt-slider'
})
export class SliderComponent {
  
  render() {
    return (
      <div class="slider-container">
        ...
      </div>
    )
  }
}
```

### Add properties

Our slider will have a min and a max property and an initial value property. Adding a property to a Stencil component is very easy. All you have to do is to use the `@Prop` decorator:

```jsx
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fwt-slider'
})
export class SliderComponent {
  
  @Prop() min: number;
  @Prop() max: number;
  @Prop() value: number;
  
  render() {
    return (
      <div class="slider-container">
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider">
        </input>
      </div>
    )
  }
}
```

### Emit data using events

How do we go about emitting an event when the value has been changed? To accomplish this we only have to use another decorator called `@Event`. The decorator is used in combination with an `EventEmitter` interface. it  will create a custom event that is called like the event property. You can change the name and other event properties by passing `EventOptions` to the `@Event` decorator but for our example we keep things simple.

In this example we are listening to changes by the range input and pass the current value via the `EventEmitter` using its `emit` function.

We also added some style to our slider by setting the `styleUrl` (Stencil supports scss and css) in the `@Component` decorator.

### Final component (slider.tsx)

```jsx
import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fwt-slider',
  styleUrl: 'slider.scss'
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
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider" 
               onChange={(event) => this.valueChangedHandler(event)}>
        </input>
      </div>
    );
  }
}
```

### Final slider.scss

```scss
fwt-slider {
  
  .slider-container {
    width: 100%;

    .slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 15px;
      border-radius: 5px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      transition: opacity .2s;

      &:hover {
        opacity: 1;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%; 
        background: #4CAF50;
        cursor: pointer;
      }

      &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
    }
  }
}
```

### Integration with an angular-cli project

Stencil basic configuration is defined in `stencil.config.ts` with a namespace
used to register the `fwt-slider` component there.

```typescript
import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "fwt-slider",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "docs"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ]
};
```

Start the build with `npm run build` inside the `stencil` directory.

After the build is done you must copy the whole `build` dir from `/stencil/www/` to `/angular/src/assets/`.

### Make angular ready for web components

Our angular project only has one basic app module containing only one simple app component.

To enable the use of web components we must add the `CUSTOM_ELEMENTS_SCHEMA` from the `@angular/core` module to our `app.module.ts` file.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Add the Stencil component javascript file to angular index.html

Next we need to add the generated javascript of our stencil project to our angular project. To do this we add a script tag somewhere in the head of the `index.html` of our angular project.

```html
<script src="assets/build/app.js"></script>
```

An even better way would be to add your additional web component scripts to the `.angular-cli.json` config file as explained [here](https://github.com/angular/angular-cli/wiki/stories-global-scripts).

### Add angular data-binding

We said that our slider component has three properties (min, max, value). So let's establish angular data-binding to these properties in our `app.component.ts` file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  min = 0;
  max = 100;
  value = 50;
}
```

In the `app.component.html` we are add our slider web component like this:

```html
<fwt-slider [min]="min" [max]="max" [value]="value"></fwt-slider>
```

### Play around with events

One last thing to show is how we can listen to the custom events and use them to update the data-bound properties. So let's create a trivial example. We add another slider with its own value and two event handlers that set the value property of the other slider component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  min = 0;
  max = 100;
  value1 = 50;
  value2 = 50;

  onValue1Changed(event: CustomEvent) {
    console.log(event.detail);
    this.value2 = event.detail;
  }

  onValue2Changed(event: CustomEvent) {
    console.log(event.detail);
    this.value1 = event.detail;
  }
}
```

```html
<fwt-slider [min]="min" [max]="max" [value]="value1"
             (valueChanged)="onValue1Changed($event)">
</fwt-slider>
<fwt-slider [min]="min" [max]="max" [value]="value2"
            (valueChanged)="onValue2Changed($event)">
</fwt-slider>
```

### Run the angular app

See the results by running `npm start` inside the angular directory.

![final slider](https://raw.githubusercontent.com/seveves/angular-stencil/master/angular/slider.gif)
