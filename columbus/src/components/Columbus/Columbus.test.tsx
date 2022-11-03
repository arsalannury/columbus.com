import {screen,render} from '@testing-library/react';
import ColumbusPage from './Columbus.page';
import {QueryClientProvider as QueryClientProviderCore,QueryClient} from 'react-query';
import { QueryClientProviderPropsWithChildren } from '../../Interface/QueryClientProviderInterface';
const QueryClientProvider: React.FC<QueryClientProviderPropsWithChildren> = QueryClientProviderCore;

// jest.mock("../../hooks/fetchAllData",() =>  ({
//     __esModule:true,
//     useAllData: () => {
//         return {
//             data:[{name:"test"}]
//         }
//     }
// }))
describe("nodes are in document",() => {
    it("should be in the DOM",() => {
        const client = new QueryClient();        
        render(
            <QueryClientProvider client={client} contextSharing={true}>
                <ColumbusPage />
            </QueryClientProvider>
        );
            setTimeout(() => {
                const headingElement = screen.getByRole("heading",{name:/Columbus.com/i,level:1});
                expect(headingElement).toBeInTheDocument();

                const paragElement = screen.getByText("search about all countries");
                expect(paragElement).toBeInTheDocument();
            }, 3000);
    })
})