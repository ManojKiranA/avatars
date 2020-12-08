---
title: Female
slug: /styles/female
---

Designed by <a href="https://github.com/FlorianKoerner">Florian Körner</a>. Heavy inspired by
[8biticon](https://github.com/matveyco/8biticon).

<p>
    <img src="https://avatars.dicebear.com/api/female/Sean%20Moore.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Lionel%20Quinn.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Lydia%20Ellis.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Bryan%20Phelps.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Ronald%20Frank.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Annette%20Klein.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Brent%20Hill.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Stanley%20Newman.svg" width="60" />{ ' ' }
    <img src="https://avatars.dicebear.com/api/female/Grace%20Singleton.svg" width="60" />
</p>

## Usage

### HTTP-API (recommended)

Our free HTTP-API is the easiest way to use this avatar style. Just use the following URL as image source.

    https://avatars.dicebear.com/api/female/:seed.svg

See the [HTTP API documentation](/docs/http-api) for more information.

#### Examples

| preview                                                                                   | url                                                              |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| <img src="https://avatars.dicebear.com/api/female/example.svg" width="60" />              | https://avatars.dicebear.com/api/female/example.svg              |
| <img src="https://avatars.dicebear.com/api/female/example.svg?mood[]=happy" width="60" /> | https://avatars.dicebear.com/api/female/example.svg?mood[]=happy |
| <img src="https://avatars.dicebear.com/api/female/example.svg?mood[]=sad" width="60" />   | https://avatars.dicebear.com/api/female/example.svg?mood[]=sad   |

### NPM

Install the Avatars and this avatar style with the following command.

    npm install --save @dicebear/avatars @dicebear/avatars-pixel-art

Now you are ready to create your first Avatar.

```js
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-pixel-art';

let options = {};
let avatars = new Avatars(sprites, options);
let svg = avatars.create('custom-seed');
```

## Options

| name            | alias | type             | default                         | description                                                                                                                                         |
| --------------- | ----- | ---------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius          | r     | number           | `0`                             | Avatar border radius                                                                                                                                |
| dataUri         |       | bool             | `false`                         | Return avatar as data uri instead of XML <br /> **Not supported by the HTTP API**                                                                   |
| width           | w     | number           | `null`                          | Fixed width                                                                                                                                         |
| height          | h     | number           | `null`                          | Fixed height                                                                                                                                        |
| margin          | m     | number           | `0`                             | Avatar margin in percent<br /> **HTTP-API limitation** Max value `25`                                                                               |
| backgroundColor | b     | string           | `null`                          | Any valid color identifier<br /> **HTTP-API limitation** Only hex _(3-digit, 6-digit and 8-digit)_ values are allowed. Use url encoded hash: `%23`. |
| mood            |       | array of strings | `['happy', 'sad', 'surprised']` | Possible values: `sad`, `happy`, `surprised`                                                                                                        |
