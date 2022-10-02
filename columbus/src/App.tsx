import React from "react";
import ColumbusPage from "./components/Columbus/Columbus.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProviderPropsWithChildren } from "./Interface/QueryClientProviderInterface";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import { Routes, Route } from "react-router-dom";
import CountryPage from "./components/Country/Country.page";

const client = new QueryClient();
const Provider: React.FC<QueryClientProviderPropsWithChildren> =
  QueryClientProvider;

const App: React.FC = () => {
  return (
    <>
      <Provider client={client}>
        <React.Profiler id="columbus" onRender={(e) => console.log(e)}>
          <VideoBackground />
          <Routes>
            <Route path="/" element={<ColumbusPage />} />
            <Route path="/country/:id" element={<CountryPage />} />
          </Routes>
        </React.Profiler>
        <ReactQueryDevtools />
      </Provider>
    </>
  );
};

export default App;
