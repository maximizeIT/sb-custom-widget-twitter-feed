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

/**
 * React Component
 */
export interface CustomWidgetTwitterFeedProps extends BlockAttributes {
  twittername: string,
  datawidth: number,
  dataheight: number,
}

export const CustomWidgetTwitterFeed = ({ twittername, datawidth, dataheight }: CustomWidgetTwitterFeedProps): ReactElement => {

  return <Timeline
    dataSource={{ sourceType: "url", url: `https://twitter.com/${twittername}` }}
    options={{ width: datawidth, height: dataheight }}
    renderError={_err =>
      "Could not load timeline! ...Your custom component here"
    }
  />
  
  // return <p>
  //     <a 
  //       className="twitter-timeline" 
  //       href={ 'https://twitter.com/' + twittername }
  //       target="_blank"
  //       data-width={datawidth} 
  //       data-height={dataheight}
  //       data-link-color={datalinkcolor}>
  //         {twittername} Tweets
  //     </a>
  //   </p>;
};

