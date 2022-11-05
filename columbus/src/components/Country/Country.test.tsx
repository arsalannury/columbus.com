import { screen, render } from "@testing-library/react";
import {
  QueryClientProvider as QueryClientProviderCore,
  QueryClient,
} from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProviderPropsWithChildren } from "../../Interface/QueryClientProviderInterface";
import CountryPage from "./Country.page";
const QueryClientProvider: React.FC<QueryClientProviderPropsWithChildren> =
  QueryClientProviderCore;

  jest.mock("../CountryDetails/AltSpellings/AltSpellings.framer.motion", 
  () => () => {return <div data-testid="AltSpellings" />});
  jest.mock("../CountryDetails/Capital/Capital.framer.motion", 
  () => () => {return <div data-testid="Capital" />});
  jest.mock("../CountryDetails/Public/Public.framer.motion", 
  () => () => {return <div data-testid="Public" />});
  jest.mock("../CountryDetails/Geography/Geography.framer.motion", 
  () => () => {return <div data-testid="Geography" />});

describe("country component tests", () => {
  const client = new QueryClient();
  it("should render elements correctly", () => {
    render(
      <QueryClientProvider client={client}>
        <Router>
          <CountryPage />
        </Router>
      </QueryClientProvider>
    );

    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();

    setTimeout(() => {
      const flagImageElement = screen.getByAltText("country-flag.png");
      expect(flagImageElement).toBeInTheDocument();
     
     const altSpellingsComponent = screen.getByTestId(/AltSpellings/);
     expect(altSpellingsComponent).toBeInTheDocument();

     const capitalComponent = screen.getByTestId(/Capital/);
     expect(capitalComponent).toBeInTheDocument();

     const publicComponent = screen.getByTestId(/Public/);
     expect(publicComponent).toBeInTheDocument();

     const geographyComponent = screen.getByTestId(/Geography/);
     expect(geographyComponent).toBeInTheDocument();

    }, 3000);
  });
});
