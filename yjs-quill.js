// @ts-nocheck
// eslint-disable

import "./yjs.js";
import { QuillBinding } from "y-quill";
import Quill from "quill";
import QuillCursors from "quill-cursors";

Quill.register("modules/cursors", QuillCursors);

window.QuillBinding = QuillBinding;
window.Quill = Quill;
window.QuillCursors = QuillCursors;
