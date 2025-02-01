import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShortenLinkPage } from "./pages/ShortenLinkPage";
import { RedirectPage } from "./pages/RedirectPage";
import { NotFoundPage } from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App2() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <ShortenLinkPage />,
    },
    {
      path: "/:shortUrlId",
      element: <RedirectPage />,
    },

    {
      path: "/not-found",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
