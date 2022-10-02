import React from "react";
import ColumbusPage from "./components/Columbus/Columbus.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProviderPropsWithChildren } from "./Interface/QueryClientProviderInterface";
import VideoBackground from "./components/VideoBackground/VideoBackground";

const client = new QueryClient();
const Provider: React.FC<QueryClientProviderPropsWithChildren> =
  QueryClientProvider;

const App: React.FC = () => {
  return (
    <>
      <Provider client={client}>
        <React.Profiler id="columbus" onRender={(e) => console.log(e)}>
          <VideoBackground />
          <ColumbusPage />
        </React.Profiler>
        <ReactQueryDevtools />
      </Provider>
    </>
  );
};

export default App;
