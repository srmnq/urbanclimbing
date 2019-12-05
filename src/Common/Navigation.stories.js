import React from "react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"
import Navigation from "./Navigation"

export default {
  title: "Navigation",
  decorators: [withKnobs],
}

export const standard = () => <Navigation />
