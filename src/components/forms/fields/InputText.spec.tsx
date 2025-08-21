import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";

test("renderiza o label do input", () => {
  render(<input placeholder='testing'  />);
  expect(screen.getByPlaceholderText("testing")).toBeInTheDocument();
});