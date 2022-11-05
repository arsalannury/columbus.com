import { render, screen } from "@testing-library/react";
import CardPage from "./Card.page";
import { BrowserRouter as Router } from "react-router-dom";

describe("card component", () => {
  it("should pass elements in DOM", () => {
    render(
      <Router>
        <CardPage
          bul={""}
          coatOfArms={{ png: "", svg: "" }}
          flags={{ png: "", svg: "" }}
          officialName={"testing"}
          languages={{ key: "value" }}
          maps={{ googleMaps: "maps" }}
          independent={true}
          translations={{ per: { official: "test" } }}
          population={2000}
          region={"test"}
          common={"common"}
        />
      </Router>
    );
    setTimeout(() => {
      const linkElement = screen.getAllByRole("link");
      expect(linkElement).toBeInTheDocument();

      const coatOfArmImageElement = screen.getByAltText("coat-of-arm");
      expect(coatOfArmImageElement).toBeInTheDocument();

      const locationImageElement = screen.getByAltText("location");
      expect(locationImageElement).toBeInTheDocument();

      const officialNameElement = screen.getByRole("generic",{name:"testing"});
      expect(officialNameElement).toBeInTheDocument();

      const translationElement = screen.getByRole("generic",{name:"test"});
      expect(translationElement).toBeInTheDocument();

      const languageSpanElement = screen.getByTitle("language-span-element");
      expect(languageSpanElement).toBeInTheDocument();

      const regionElement = screen.getByRole("paragraph",{name:"test"});
      expect(regionElement).toBeInTheDocument();

      const badgeElement = screen.getByTitle("badge-title");
      expect(badgeElement).toBeInTheDocument();

      const textBadgeElement = screen.getByText(/Yes/);
      expect(textBadgeElement).toBeInTheDocument();

      const populationElement = screen.getByText("population: 2/000");
      expect(populationElement).toBeInTheDocument();
    }, 3000);
  });
});
