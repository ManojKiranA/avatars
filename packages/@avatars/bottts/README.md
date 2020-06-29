![DiceBear Avatars - Bottts avatar style](https://raw.githubusercontent.com/DiceBear/avatars/master/packages/@avatars/bottts/banner.svg?sanitize=true)

![license](https://img.shields.io/npm/l/@avatars/bottts.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@avatars/bottts.svg?style=flat-square)](https://www.npmjs.com/package/@avatars/bottts)

Designed by [Pablo Stanley](https://twitter.com/pablostanley), the Sketch library can be found on
[bottts.com](https://bottts.com/).

<p>
    <img src="https://avatars.dicebear.com/api/bottts/1.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/2.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/3.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/4.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/5.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/6.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/7.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/8.svg" width="60" />
    <img src="https://avatars.dicebear.com/api/bottts/9.svg" width="60" />
</p>

## Usage

### HTTP-API (recommended)

Our free HTTP-API is the easiest way to use this avatar style. Just use the following URL as image source.

    https://avatars.dicebear.com/api/bottts/:seed.svg

The value of `:seed` can be anything you like - but **don't** use any sensitive or personal data here!

#### Examples

| preview                                                                                                                            | url                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.dicebear.com/api/bottts/example.svg" width="60" />                                                       | https://avatars.dicebear.com/api/bottts/example.svg                                                       |
| <img src="https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan" width="60" />                                | https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan                                |
| <img src="https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan&options[primaryColorLevel]=200" width="60" /> | https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan&options[primaryColorLevel]=200 |

### NPM

Install the Avatars and this avatar style with the following command.

    npm install --save @avatars/core @avatars/bottts

Now you are ready to create your first Avatar.

```js
import Avatars from '@avatars/core';
import sprites from '@avatars/bottts';

let avatars = new Avatars(sprites());
let svg = avatars.create('custom-seed');
```

## Options

| name                | alias | type             | default | description                                                                                                                                                                                                  |
| ------------------- | ----- | ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| radius              | r     | number           | `0`     | Avatar border radius                                                                                                                                                                                         |
| base64              |       | bool             | `false` | Return avatar as base64 data uri instead of XML <br> **Not supported by the HTTP API**                                                                                                                       |
| width               | w     | number           | `null`  | Fixed width                                                                                                                                                                                                  |
| height              | h     | number           | `null`  | Fixed height                                                                                                                                                                                                 |
| margin              | m     | number           | `0`     | Avatar margin in percent<br> **HTTP-API limitation** Max value `25`                                                                                                                                          |
| background          | b     | string           | `null`  | Any valid color identifier<br> **HTTP-API limitation** Only hex _(3-digit, 6-digit and 8-digit)_ values are allowed. Use url encoded hash: `%23`.                                                            |
| colors              |       | array of strings | `null`  | Possible values: `amber`, `blue`, `blueGrey`, `brown`, `cyan`, `deepOrange`, `deepPurple`, `green`, `grey`, `indigo`, `lightBlue`, `lightGreen`, `lime`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow` |
| primaryColorLevel   |       | number           | `600`   | Possible values: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`                                                                                                                         |
| secondaryColorLevel |       | number           | `400`   | Possible values: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`                                                                                                                         |
| colorful            |       | boolean          | `false` | Assigns sides and top a random secondary color                                                                                                                                                               |
| mouthProbability    |       | number           | `100`   | Probability in percent avatar will have a mouth                                                                                                                                                              |
| sidesProbability    |       | number           | `100`   | Probability in percent avatar will have side elements                                                                                                                                                        |
| textureProbability  |       | number           | `50`    | Probability in percent avatar will have texture                                                                                                                                                              |
| topProbability      |       | number           | `100`   | Probability in percent avatar will have a top element                                                                                                                                                        |

## Further information

You can find the DiceBear Avatars documentation at [avatars.dicebear.com](https://avatars.dicebear.com)