import { QueryClient, QueryClientProvider } from 'react-query';
import DynamicRoutes from './components/Pages/DynamicRoutes';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <DynamicRoutes />
        </QueryClientProvider>
    );
}

export default App;
