# Apline JS X-JSZ

Alpine JS plugin `x-jsz` allows you to use `JSX/Moustache` like syntax for templating avoding the need for `x-text` and `x-html` and creating new DOM Nodes for each text/string you need to show.

## Example

Example how `x-jsz` replaces the need for multiple <span> with `x-text` and <template> with `x-if`

```html
  <div x-data="{ name: 'Jhon', surname: 'Doe', showSurname: true }">
    <p>
      Hello I am <span x-text="name"></span> <template x-if="showSurname"><span x-text="surname"></span></template>
    </p>
    <p x-jsz>
      Hello I am {{name}} {{ showSurname && surname }}
    </p>
  </div>
```

All the code within `{{...}}` will be treated like JS code and handled by Alpine JS [`evaluate()`](https://alpinejs.dev/advanced/extending#evaluating-expressions) 

If you wish to use other Alpine JS directives within `{{...}}` use the `<template x-jsz>`

```html
  <div x-data="{ name: 'Jhon', surname: 'Doe', showSurname: true }">
    <template x-jsz>
        <p>
            Hello I am {{name}} {{ showSurname && `<span x-text="surname"></span>` }}
        </p>
    </template>
  </div>
```

Only __`ONE`__ root element should be used as all other will be ignored. `x-jsz` directive will clone the root element and [`evaluate()`](https://alpinejs.dev/advanced/extending#evaluating-expressions) all its content. Which in this example results in

```html
  <div x-data="{ name: 'Jhon', surname: 'Doe', showSurname: true }">
    <template x-jsz>
        <p>
            Hello I am {{name}} {{ showSurname && `<span x-text="surname"></span>` }}
        </p>
    </template>
    <p>
        Hello I am Jhon <span x-text="surname">Doe</span>
    </p>
  </div>
```

Make sure to use correct `HTML` tag as x-jsz will use it to create a new node after the template.

## Install

### CDN

```html
<script src="https://unpkg.com/alpinejs-jsz@latest/dist/jsz.cdn.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-jsz
or
yarn add -D alpinejs-jsz
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import jsz from "alpinejs-jsz";
Alpine.plugin(jsz);
window.Alpine = Alpine;
Alpine.start();
```

### Stats 

![](https://img.shields.io/bundlephobia/min/alpinejs-jsz)
![](https://img.shields.io/npm/v/alpinejs-jsz)
![](https://img.shields.io/npm/dt/alpinejs-jsz)
![](https://img.shields.io/github/license/markmead/alpinejs-jsz)
