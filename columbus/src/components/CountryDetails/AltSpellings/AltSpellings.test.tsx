import { render, screen } from "@testing-library/react";
import AltSpellingsFramerMotion from "./AltSpellings.framer.motion";

describe("alt spellings component", () => {
  it("should render correctly elements", () => {
    render(<AltSpellingsFramerMotion altSpellings={["r", "e", "c"]} />);
    setTimeout(() => {
      const titleMainBox = screen.getByText("alt spellings");
      expect(titleMainBox).toBeInTheDocument();

      const titleSecondBox = screen.getByText("Alt Spellings country");
      expect(titleSecondBox).toBeInTheDocument();

      const altSpellingsList = screen.getByRole("list");
      expect(altSpellingsList).toBeInTheDocument();

      const altSpellingsListItem = screen.getAllByRole("listitem");
      expect(altSpellingsListItem).toBeInTheDocument();

      const closeButtonElement = screen.getByRole("button");
      const closeIconElement = screen.getByTestId(/close-icon/);
      expect(closeButtonElement).toBeInTheDocument();
      expect(closeButtonElement).toContainElement(closeIconElement);
    }, 1000);
  });
});
