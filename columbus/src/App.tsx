import React, { ReactNode } from "react";
import ColumbusPage from "./components/Columbus/Columbus.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProviderPropsWithChildren } from "./components/Interface/QueryClientProviderInterface";

const client = new QueryClient();
const Provider: React.FC<QueryClientProviderPropsWithChildren> =
  QueryClientProvider;

const App: React.FC = () => {
  return (
    <>
      <Provider client={client}>
        <React.Profiler id="columbus" onRender={(e) => console.log(e)}>
          <ColumbusPage />
        </React.Profiler>
        <ReactQueryDevtools />
      </Provider>
    </>
  );
};

export default App;
