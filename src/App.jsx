import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const reactClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={reactClient}>
      <ReactQueryDevtools initialIsOpen = {false} />
      <GlobalStyle />
      <BrowserRouter> 
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="booking" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<NewUsers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </QueryClientProvider>
  )
}

export default App
