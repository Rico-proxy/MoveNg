import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import BaseLayout from "@/baseLayout/BaseLayout"
import Page from "@/pages/landingPage/page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Page />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
