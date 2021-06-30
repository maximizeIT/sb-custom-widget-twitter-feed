/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "twittername"
  ],
  properties: {
    twittername: {
      type: "string",
      title: "Twitter Handle",
      default: "StaffbaseHQ",
    },
    datawidth: {
      type: "integer",
      title: "Feed Width",
      default: 350,
      minimum: 180,
    },
    dataheight: {
      type: "integer",
      title: "Feed Height",
      default: 700,
      minimum: 200,    
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  twittername: {
    "ui:help": "Please enter a Twitter name / handle to use for the feed.",
  },
  datawidth: {
    "ui:help": "Please enter a width for the Twitter feed.",
    "ui:widget": "updown"
  },
  dataheight: {
    "ui:help": "Please enter a height for the Twitter feed.",
    "ui:widget": "updown"
  },
};
