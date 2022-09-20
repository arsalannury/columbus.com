import React, { ReactNode } from "react";
import ColumbusPage from "./components/Columbus/Columbus.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const client = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <React.Profiler id="columbus" onRender={(e) => console.log(e)}>
          <ColumbusPage />
        </React.Profiler>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
