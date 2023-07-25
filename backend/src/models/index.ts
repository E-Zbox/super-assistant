import { model } from "mongoose";
// schemas
import { FormSchema } from "./Form";
import { PageSchema } from "./Page";

export const Form = model("Form", FormSchema);

export const Page = model("Page", PageSchema);
