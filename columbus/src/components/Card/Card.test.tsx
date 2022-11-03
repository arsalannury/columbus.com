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
          common={"test"}
        />
      </Router>
    );
    setTimeout(() => {
      const linkElement = screen.getAllByRole("link");
      expect(linkElement).toBeInTheDocument();
    }, 3000);
  });
});
