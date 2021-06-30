import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetTwitterFeed} from "./custom-widget-twitter-feed";

describe("CustomWidgetTwitterFeed", () => {
    it("should render the component", () => {
        render(<CustomWidgetTwitterFeed contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
