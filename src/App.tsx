import "./App.css";
import ResizableBasePage from "./pages/Resizer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import { useColorScheme } from "@mui/material";

function App() {
    const { colorScheme } = useColorScheme();
    if (!colorScheme) return null;
    return (
        <div className="w-screen h-screen bg-bg flex flex-col">
            <Navbar />
            <ResizableBasePage />
        </div>
    );
}

export default App;
