import {
  css,
  customElement,
  html,
  LitElement,
  property,
  unsafeCSS,
} from "lit-element";
// import Quill from 'uxl-quill/dist/quill';
import Quill from "quill";
import undo_icon from "./assets/icons/undo.svg";
import redo_icon from "./assets/icons/redo.svg";
import { style as styles } from "./styles-css";
import { template } from "./template";
import { CoreConfig } from "@uxland/ui-core";

export interface RTEConfig extends CoreConfig {
  options: RTEOptions[];
}

export type RTEOptions =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "blockquote"
  | "code-block"
  | "image"
  | "video"
  | "link"
  | "color"
  | "background"
  | "subindex"
  | "superindex"
  | "outdent"
  | "indent"
  | "size"
  | "header"
  | "font"
  | "align"
  | "clear"
  | "undo"
  | "redo";
/**
 * Rich Text Editor component
 * @element uxl-rich-text-editor
 *
 * @prop options - Available options
 *
 * @fires text-changed - Fires whenever the text changes
 */
@customElement("uxl-rich-text-editor")
export class UxlRichTextEditor extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html` ${template(this)} `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  firstUpdated() {
    this.quill = new Quill(
      this.shadowRoot.querySelector("#uxl-rte"),
      this._getOptions()
    );
    (<any>this.quill).on("text-change", function (delta, oldDelta, source) {
      const values = {
        html: (<LitElement>this).shadowRoot.querySelector(".ql-editor")
          .innerHTML,
        plain: (<any>this.quill).getText(),
      };
      const textChanged = new CustomEvent("text-changed", {
        composed: true,
        detail: { text: values },
      });
      (<LitElement>this).dispatchEvent(textChanged);
    });
  }

  @property()
  private quill: any;

  @property({ type: [String] })
  public options: RTEOptions[];

  @property()
  private availableOptions: RTEOptions[] = [
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "image",
    "video",
    "link",
    "color",
    "background",
    /* 'ol',
    'ul', */
    "subindex",
    "superindex",
    "outdent",
    "indent",
    "size",
    "header",
    "font",
    "align",
    "clear",
    "undo",
    "redo",
  ];

  _getOptions() {
    let toolbarOptions = [];
    const availableOpts = this.availableOptions;
    if (this.options === undefined || this.options.length == 0) {
      toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        /* [{ list: 'ordered' }, { list: 'bullet' }], */
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge", "20px"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["image"],
        ["video"],
        ["clean"],
      ];
    } else {
      toolbarOptions = [...this.options];
      toolbarOptions.map(function (option) {
        if (availableOpts.indexOf(option) <= -1)
          toolbarOptions.splice(toolbarOptions.indexOf(option), 1);
      });
      toolbarOptions = toolbarOptions.map(function (option) {
        if (option == "color") return { color: [] };
        /* else if (option == 'ol') return { list: 'ordered' };
        else if (option == 'ul') return { list: 'bullet' }; */ else if (
          option == "subindex"
        )
          return { script: "sub" };
        else if (option == "superindex") return { script: "super" };
        else if (option == "outdent") return { indent: "-1" };
        else if (option == "indent") return { indent: "+1" };
        else if (option == "size")
          return { size: ["small", false, "large", "huge"] };
        else if (option == "header")
          return { header: [1, 2, 3, 4, 5, 6, false] };
        else if (option == "background") return { background: [] };
        else if (option == "font") return { font: [] };
        else if (option == "align") return { align: [] };
        else if (option == "undo") return { undo: undo_icon };
        else if (option == "redo") return { redo: redo_icon };
        else return option;
      });
      if (toolbarOptions.indexOf("clean") < 0) {
        toolbarOptions.push("clean");
      }
    }

    const icons = Quill.import("ui/icons");
    icons["undo"] = undo_icon;
    icons["redo"] = redo_icon;

    const options = {
      modules: {
        toolbar: {
          container: toolbarOptions,
          handlers: {
            redo() {
              this.quill.history.redo();
            },
            undo() {
              this.quill.history.undo();
            },
          },
        },
        history: {
          delay: 1000,
          maxStack: 50,
          userOnly: false,
        },
      },
      formats: [
        "background",
        "bold",
        "color",
        "font",
        "code",
        "italic",
        "link",
        "size",
        "strike",
        "script",
        "underline",
        "blockquote",
        "header",
        "indent",
        // "list", <-- commented-out to suppress auto bullets
        "align",
        "direction",
        "code-block",
        "formula",
        "image",
        "video",
      ],
      theme: "snow",
    };
    return options;
  }
}
