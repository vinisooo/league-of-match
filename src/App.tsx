import { UserProvider } from "contexts/UserContext";
import { MainRoutes as Routes } from "routes/MainRoutes";

export function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  )
}