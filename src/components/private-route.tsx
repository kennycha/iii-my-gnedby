import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}
