import "./App.css";
import ResizableBasePage from "./pages/Resizer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh", background: "#15181a" }}>
            <Navbar />
            <ResizableBasePage />
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ResizableBasePage />} />
                    <Route
                        path="tools"
                        element={
                            <>
                                <Outlet />
                            </>
                        }
                    >
                        <Route path="requester" element={<Requester />} />
                    </Route>
                    <Route
                        path="/games"
                        element={
                            <>
                                <Outlet />
                            </>
                        }
                    >
                        <Route path="wordle" element={<Wordle />} />
                    </Route>
                    <Route
                        path="/resume"
                        element={
                            <embed
                                src={"./JoshuaBernstein_Resume.pdf"}
                                type="application/pdf"
                                height={"100%"}
                                width={"100%"}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}

export default App;
