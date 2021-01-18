/**
 * Adapted from https://github.com/elmsln/lrnwebcomponents/blob/master/elements/simple-icon/lib/simple-iconset.js
 */
import { customElement } from "lit-element";

@customElement("uxl-iconset")
export default class UxlIconSet extends HTMLElement {
  private iconsets = {};
  private needsHydrated = [];

  registerIconset(family, icons = {}) {
    if (typeof icons === "object") this.iconsets[family] = { ...icons };
    else if (typeof icons === "string") this.iconsets[family] = icons;

    if (this.needsHydrated.length > 0) {
      const list = [];
      this.needsHydrated.forEach((item, index) => {
        // set the src from interns of the icon, returns if it matched
        // which will then push it into the list to be removed from processing
        if (item.setSrcByIcon(this)) {
          list.push(index);
        }
      });
      // process in reverse order to avoid key splicing issues
      list.reverse().forEach((val) => {
        this.needsHydrated.splice(val, 1);
      });
    }
  }

  getIcon(id, context) {
    const [family, icon] = id.split(":");
    if (family && icon && this.iconsets[family])
      return (
        this.iconsets[family][icon] || `${this.iconsets[family]}${icon}.svg`
      );
    // if we get here we just missed on the icon hydrating which means
    // either it's an invalid icon OR the library to register the icons
    // location will import AFTER (possible microtiming early on)
    // also weird looking by context is either the element asking about
    // itself OR the the iconset state manager checking for hydration
    if (context != this) this.needsHydrated.push(context);
    return null;
  }
}

const pathFromUrl = (url: string) => url.substring(0, url.lastIndexOf("/") + 1);
const pathResolver = (base: string, path = "") =>
  pathFromUrl(decodeURIComponent(base)) + path;
export { pathResolver, pathFromUrl };

(window as any).UxlIconSet = (window as any).UxlIconSet || {};
/**
 * Checks to see if there is an instance available, and if not appends one
 */
(window as any).UxlIconSet.requestAvailability = () => {
  if ((window as any).UxlIconSet.instance == null) {
    (window as any).UxlIconSet.instance = document.createElement("uxl-iconset");
  }
  document.body.appendChild((window as any).UxlIconSet.instance);
  return (window as any).UxlIconSet.instance;
};
// self request so that when this file is referenced it exists in the dom
(window as any).UxlIconSet.requestAvailability();
