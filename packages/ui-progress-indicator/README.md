# UXL Progress Indicator Component [![npm version](https://badge.fury.io/js/%40uxland%2Fui-progress-indicator.svg)](https://badge.fury.io/js/%40uxland%2Fui-progress-indicator)

> IMPORTANT: The Uxland UI Web Components are a work in progress and subject to
> major changes until 1.0 release.

## Installation

```sh
npm i @uxland/ui-progress-indicator
```

> NOTE: The Uxland UI Web Components are distributed by Uxland Company and are free to use
> Modules, and use the Custom Elements API. They are compatible with all modern
> browsers including Chrome, Firefox, Safari, Edge, and IE11.

## Usage

### Default Spinner

```html
<uxl-progress-indicator></uxl-progress-indicator>
```

![](images/spinner.png)

### Spinner with text

```html
<uxl-progress-indicator .text="Im Busy!"></uxl-progress-indicator>
```

![](images/text.png)

### Bouncing progress

```html
<uxl-progress-indicator .type="bouncing"></uxl-progress-indicator>
```

![](images/bouncing.png)

### Linear progress

```html
<uxl-progress-indicator .type="linear"></uxl-progress-indicator>
```

![](images/linear.png)

## API

### Properties/Attributes

| Name   | Type     | Default     | Description                                                               |
| ------ | -------- | ----------- | ------------------------------------------------------------------------- |
| `type` | `string` | `'spinner'` | The type of progress indicator. Can be `circular`, `linear` or `bouncing` |
| `text` | `string` | `''`        | Label to display under circular progress.                                 |

### Methods

_None_

### Events

_None_

### CSS Custom Properties

| Name                         | Default               | Description                                                         |
| ---------------------------- | --------------------- | ------------------------------------------------------------------- |
| `--progress-color`           | `#009688`             | Color for spinner and bouncing.                                     |
| `--spinner-stroke`           | `3px`                 | Spinner stroke.                                                     |
| `--spinner-width`            | `30px`                | Spinner width.                                                      |
| `--spinner-height`           | `30px`                | Spinner height.                                                     |
| `--spinner-background-color` | `transparent`         | Spinner container background color.                                 |
| `--title-color`              | `rgba(0, 0, 0, 0.87)` | Spinner title color.                                                |
| `--title-font-size`          | `1rem`                | Spinner title font-size.                                            |
| `--title-font-weight`        | `light`               | Spinner title font-weigth.                                          |
| `--bouncing-ball-width`      | `10px`                | Width of bouncing ball.                                             |
| `--bouncing-ball-height`     | `10px`                | heigth of bouncing ball.                                            |
| `--linear-width`             | `100%`                | Width of linear progress.                                           |
| `--linear-color`             | `0, 150, 136`         | RGB color of linear progress. Don't pass tgb function, only 3 args. |
