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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

// https://www.npmjs.com/package/react-twitter-widgets
// https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions
import { Timeline } from 'react-twitter-widgets';

import { Error } from "./components/Error";

/**
 * React Component
 */
export interface CustomWidgetTwitterFeedProps extends BlockAttributes {
  twittername: string,
  height: number,
  tweetlimit: number,
  darktheme: boolean,
  border: boolean,
  bordercolor: string,
  noheader: boolean,
  nofooter: boolean,
  noscrollbar: boolean,
}

export const CustomWidgetTwitterFeed = ({ twittername, height, tweetlimit, darktheme, border, bordercolor, noheader, nofooter, noscrollbar }: CustomWidgetTwitterFeedProps): ReactElement => {

  const defaultHeight = 600;
  const useDarkTheme = typeof darktheme == "string" ? darktheme === "true" : !!darktheme;
  const useBorder = typeof border == "string" ? border === "true" : !!border;
  const noHeader = typeof noheader == "string" ? noheader === "true" : !!noheader;
  const noFooter = typeof nofooter == "string" ? nofooter === "true" : !!nofooter;
  const noScrollbar = typeof noscrollbar == "string" ? noscrollbar === "true" : !!noscrollbar;

  let chrome = null;

  if(noHeader && noFooter && noScrollbar) {
    chrome = "noheader,nofooter,noscrollbar";
  } else if(noHeader && noFooter) {
    chrome = "noheader,nofooter";
  } else if(noHeader && noScrollbar) {
    chrome = "noheader,noscrollbar";
  } else if(noFooter && noScrollbar) {
    chrome = "nofooter,noscrollbar";
  } else if(noHeader) {
    chrome = "noheader";
  } else if(noFooter) {
    chrome = "nofooter";
  } else if(noScrollbar) {
    chrome = "noscrollbar";
  }

  return <Timeline
    dataSource={{ sourceType: "url", url: twittername ? `https://twitter.com/${twittername}` : `https://twitter.com/StaffbaseHQ` }}
    
    options={{
      height: height ? height : defaultHeight,
      borderColor: useBorder ? bordercolor : null, 
      theme: useDarkTheme ? "dark" : "light",
      tweetLimit: tweetlimit ? tweetlimit : null,
      chrome: chrome,
      dnt: true // default: Set to true, so the embed and its embedded page on your site are not used for purposes that include personalized suggestions and personalized ads
    }}

    renderError={_err => <Error /> }
  />
};

