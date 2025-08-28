import { Routes, Route } from "react-router-dom";
import ComponentsPreview from "~/pages/ComponentsPreview";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/componentsPreview" element={<ComponentsPreview />} />
        </Routes>
    )
}