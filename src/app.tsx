import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthProvider } from "./store/auth-context";
import { ModelProvider } from "./store/model-context";

export default function App() {
  return (
    <AuthProvider>
      <ModelProvider>
        <RouterProvider router={router} />
      </ModelProvider>
    </AuthProvider>
  );
}
