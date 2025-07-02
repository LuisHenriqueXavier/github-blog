import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
