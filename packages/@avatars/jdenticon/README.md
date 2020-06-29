![DiceBear Avatars - Jdenticon avatar style](https://raw.githubusercontent.com/DiceBear/avatars/master/packages/@avatars/jdenticon/banner.svg?sanitize=true)

![license](https://img.shields.io/npm/l/@avatars/jdenticon.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@avatars/jdenticon.svg?style=flat-square)](https://www.npmjs.com/package/@avatars/jdenticon)

[Jdenticon](https://github.com/dmester/jdenticon) wrapper for DiceBear Avatars.

<p>
    <img src="https://avatars.dicebear.com/api/jdenticon/1.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/2.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/3.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/4.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/5.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/6.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/7.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/8.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/jdenticon/9.svg" width="60" />
</p>

## Usage

### HTTP-API (recommended)

Our free HTTP-API is the easiest way to use this avatar style. Just use the following URL as image source.

    https://avatars.dicebear.com/api/jdenticon/:seed.svg

The value of `:seed` can be anything you like - but **don't** use any sensitive or personal data here! The GET parameter
`options` can be used to pass [options](#options).

#### Examples

| preview                                                                                                                             | url                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.dicebear.com/api/jdenticon/example.svg" width="60" />                                                     | https://avatars.dicebear.com/api/jdenticon/example.svg                                                     |
| <img src="https://avatars.dicebear.com/api/jdenticon/example.svg?options[padding]=0.05&options[background]=%23f0f0f0" width="60" /> | https://avatars.dicebear.com/api/jdenticon/example.svg?options[padding]=0.05&options[background]=%23f0f0f0 |

### NPM

Install the Avatars and this avatar style with the following command.

    npm install --save @avatars/core @avatars/jdenticon

Now you are ready to create your first Avatar.

```js
import Avatars from '@avatars/core';
import sprites from '@avatars/jdenticon';

let options = {};
let avatars = new Avatars(sprites, options);
let svg = avatars.create('custom-seed');
```

## Options

| name                | alias | type                                 | default | description                                                                                                                                       |
| ------------------- | ----- | ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius              | r     | number                               | `0`     | Avatar border radius                                                                                                                              |
| base64              |       | bool                                 | `false` | Return avatar as base64 data uri instead of XML <br> **Not supported by the HTTP API**                                                            |
| width               | w     | number                               | `null`  | Fixed width                                                                                                                                       |
| height              | h     | number                               | `null`  | Fixed height                                                                                                                                      |
| margin              | m     | number                               | `0`     | Avatar margin in percent<br> **HTTP-API limitation** Max value `25`                                                                               |
| background          | b     | string                               | `null`  | Any valid color identifier<br> **HTTP-API limitation** Only hex _(3-digit, 6-digit and 8-digit)_ values are allowed. Use url encoded hash: `%23`. |
| hues                |       | array of numbers between 0 and 360   | `null`  | Icon hue                                                                                                                                          |
| lightnessColor      |       | array of two numbers between 0 and 1 | `null`  | Colored shapes - Lightness                                                                                                                        |
| lightnessGrayscale  |       | array of two numbers between 0 and 1 | `null`  | Grayscale shapes - Lightness                                                                                                                      |
| saturationColor     |       | number between 0 and 1               | `null`  | Colored shapes - Saturation                                                                                                                       |
| saturationGrayscale |       | number between 0 and 1               | `null`  | Grayscale shapes - Saturation                                                                                                                     |

## Further information

You can find the DiceBear Avatars documentation at [avatars.dicebear.com](https://avatars.dicebear.com)