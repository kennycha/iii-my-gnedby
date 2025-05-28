import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../store/auth-context";
import { ModelProvider } from "../store/model-context";
import router from "./router";

export default function App() {
  return (
    <AuthProvider>
      <ModelProvider>
        <RouterProvider router={router} />
      </ModelProvider>
    </AuthProvider>
  );
}
