import {
  render,
  screen,
  fireEvent,
  waitFor
} from "@testing-library/react";
import AltSpellingsFramerMotion from "./AltSpellings.framer.motion";

describe("alt spellings component", () => {
  it("should render main title", async () => {
    render(<AltSpellingsFramerMotion altSpellings={["r", "e", "c"]} />);
    const mainBoxTitle = await screen.findByText(/alt spellings/);
    expect(mainBoxTitle).toBeInTheDocument();
  });

  it("should render title of component", async () => {
    render(<AltSpellingsFramerMotion altSpellings={["r", "e", "c"]} />);
    fireEvent.click(screen.getByTestId("motion-container"));
    await waitFor(() => screen.findByTestId("spellings-countries"));
    expect(screen.getByTestId("spellings-countries")).toHaveTextContent(
      "Alt Spellings country"
    );
  });

  it("should render list", async () => {
    render(<AltSpellingsFramerMotion altSpellings={["r", "e", "c"]} />);
    fireEvent.click(screen.getByTestId("motion-container"));
    await waitFor(() => screen.findByRole("list"));
    const listSpellings = await screen.findByRole("list");
    expect(listSpellings).toBeInTheDocument();

    const listItemSpellings = await screen.findAllByRole("listitem");
    expect(listItemSpellings).toHaveLength(3);
  });
});

// const altSpellingsList = await screen.findByRole("list");
// expect(altSpellingsList).toBeInTheDocument();

// const altSpellingsListItem = await screen.findAllByRole("listitem");
// expect(altSpellingsListItem).toBeInTheDocument();

// const closeButtonElement = await screen.findByRole("button");
// const closeIconElement = await screen.findByTestId(/close-icon/);
// expect(closeButtonElement).toBeInTheDocument();
// expect(closeButtonElement).toContainElement(closeIconElement);
