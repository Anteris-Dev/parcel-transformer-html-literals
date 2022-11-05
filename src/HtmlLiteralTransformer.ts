import {Transformer} from "@parcel/plugin";
import {minifyHTMLLiterals} from "minify-html-literals";

export default new Transformer({
  async transform({ asset }) {
    if (! asset.env.shouldOptimize) {
      return [asset];
    }

    const source = await asset.getCode();
    const optimized = minifyHTMLLiterals(source)?.code || source;

    asset.setCode(optimized);

    return [asset];
  }
});