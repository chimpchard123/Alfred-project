import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Thread from "./pages/Threads";
import NewThread from "./pages/NewThread";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thread/:id" element={<Thread />} />
                <Route path="/new" element={<NewThread />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
