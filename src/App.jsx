import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout/Layout";
import defaultOptions from "./config/reactQuery";
import Router from "./routers/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const client = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Router />
        <ReactQueryDevtools />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
