import React from "react";
import { QueryClient } from "react-query";

export interface QueryClientProviderPropsWithChildren {
    client: QueryClient;
    contextSharing?: boolean;
    children: React.ReactNode | undefined;
}