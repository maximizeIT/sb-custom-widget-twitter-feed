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
    height: {
      type: "integer",
      title: "Feed Height",
      default: 600,
      minimum: 200,    
    },
    tweetlimit: {
      type: "integer",
      title: "Feed Limit",
      minimum: 1,
      maximum: 20,  
    },
    darktheme: {
      type: "boolean",
      title: "Dark Theme",
    },
    border: {
      type: "boolean",
      title: "Border (between Tweets)",
    },
    bordercolor: {
      type: "string",
      title: "Border Color",
      default: "#91a5b4",
    },
    noheader: {
      type: "boolean",
      title: "No Header",
    },
    nofooter: {
      type: "boolean",
      title: "No Footer",
    },
    noscrollbar: {
      type: "boolean",
      title: "No Scrollbar",
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
  height: {
    "ui:help": "Please enter a height for the Twitter feed. Default: 600 px. Note: the width of the the Twitter feed is derived from the container size.",
    "ui:widget": "updown"
  },
  tweetlimit: {
    "ui:help": "Please enter a tweet limit for the Twitter feed. Range: 1 - 20 (default). IMPORTANT: when using a limit, it disables the scrollbar and disregards the defined height.",
    "ui:widget": "updown"
  },
  darktheme: {
    "ui:help": "Select this option to activate the dark theme for the Twitter feed.",
  },
  border: {
    "ui:help": "Select this option to activate a border between Tweets within the Twitter feed.",
  },
  bordercolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the border between Tweets within the Twitter feed. Default: #91a5b4"
  },
  noheader: {
    "ui:help": "Select this option to deactivate the header of the Twitter feed.",
  },
  nofooter: {
    "ui:help": "Select this option to deactivate the footer of the Twitter feed.",
  },
  noscrollbar: {
    "ui:help": "Select this option to deactivate the scrollbar of the Twitter feed.",
  },
};
