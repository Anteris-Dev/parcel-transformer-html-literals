Minifies HTML literals that Terser ignores.

# About
This plugin takes template literals (such as Lit's) and minifies them. This helps ensure that using such literals does not increase the package size when using Parcel. For example: 

```ts
import { css } from 'lit';

css`
  div {
    padding:20px;
  }
  
  h1 {
    padding:5px;
    color:purple;
  }
`;
```

Would become:

```ts
css`div{padding:20px}h1{padding:5px;color:purple}`;
```

**Note:** When the `--no-optimize` flag is passed to Parcel, your literals _will not_ be minified.

# Install

To install this transformer, add the following lines to your [`.parcelrc`](https://parceljs.org/features/plugins/#.parcelrc) file:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
      "*.{js,mjs,jsm,jsx,es6,cjs,ts,tsx}": [
          "@anteris/parcel-transformer-html-literals",
          "@parcel/transformer-babel",
          "@parcel/transformer-js",
          "@parcel/transformer-react-refresh-wrap"
      ],
  }
}
```

**Note:** It is important that `@anteris/parcel-transformer-html-literals` be the first transformer in the list.