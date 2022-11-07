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
  it("should render elements correctly", async () => {
    render(
      <QueryClientProvider client={client}>
        <Router>
          <CountryPage />
        </Router>
      </QueryClientProvider>
    );

    const loaderElement = await screen.findByTestId("loader");
    expect(loaderElement).toBeInTheDocument();

      // const flagImageElement = await screen.findByRole("img");
      // expect(flagImageElement).toBeInTheDocument();
     
     const altSpellingsComponent = await screen.findByTestId(/AltSpellings/);
     expect(altSpellingsComponent).toBeInTheDocument();

     const capitalComponent = await screen.findByTestId(/Capital/);
     expect(capitalComponent).toBeInTheDocument();

     const publicComponent = await screen.findByTestId(/Public/);
     expect(publicComponent).toBeInTheDocument();

     const geographyComponent = await screen.findByTestId(/Geography/);
     expect(geographyComponent).toBeInTheDocument();

  });
});
