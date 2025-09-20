import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import React from "react"
import App from "./App"

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />)
    expect(
      screen.getByPlaceholderText(/Departure date/i)
    ).toBeInTheDocument()
  })

  it("renders the calendar component", () => {
    render(<App />)
    expect(screen.getByText(/Change month/i)).toBeInTheDocument()
  })

  it("renders the Continue button", () => {
    render(<App />)
    expect(screen.getByRole("button", { name: /Continue/i })).toBeInTheDocument()
  })

  it("updates input when a date is selected", () => {
    render(<App />)

    const input = screen.getByPlaceholderText(/Departure date/i)

    fireEvent.change(input, { target: { value: "2025-09-18" } })

    expect(input.value).toBe("2025-09-18")
  })
})
