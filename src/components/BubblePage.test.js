import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getColors as mockColors} from '../helpers/getColors';

jest.mock('../helpers/getColors')

const colors = [
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
]

test("Renders BubblePage without errors", () => {
  mockColors.mockResolvedValueOnce({data: colors})
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockColors.mockResolvedValueOnce({data: colors})
  render(<BubblePage />)
  await waitFor(() => {
    const colorTest = screen.getAllByText(/aqua/i)
    // console.log(colorTest)
   expect(colorTest).toHaveLength(2)
  })
  screen.debug()
  // const colorTest = screen.getByText(/aqua/i)
  // expect(colorTest).toBeInTheDocument()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading