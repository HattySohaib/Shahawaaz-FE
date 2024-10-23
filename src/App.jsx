import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogRead from "./pages/BlogRead";
import Playground from "./pages/Playground/Playground";
import Contact from "./pages/Contact";
import Editor from "./pages/Editor/Editor";
import Footer from "./components/Footer/Footer";

import { DropAreaProvider } from "./contexts/file";

function App() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/admin-playground/dashboard",
    "/admin-playground",
    "/admin-playground/categories",
    "/admin-playground/admin-controls",
    "/admin-playground/editor",
    "/admin-playground/editor/:blog",
    "/admin-playground/draftboard",
    "/editor",
    "/editor/:blog",
  ];

  // Check if the current path matches any of the noNavbar routes
  const hideNavbar = noNavbarRoutes.some((path) =>
    new RegExp(`^${path.replace(/:\w+/g, "\\w+")}$`).test(location.pathname)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="read-this-blog/:id" element={<BlogRead />} />
        <Route path="/admin-playground/*" element={<Playground />} />
        <Route
          path="/editor"
          element={
            <DropAreaProvider>
              <Editor />
            </DropAreaProvider>
          }
        />
        <Route
          path="/editor/:blog"
          element={
            <DropAreaProvider>
              <Editor />
            </DropAreaProvider>
          }
        />
        <Route path="*" element={<h1>Error 404, please enter valid URL!</h1>} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}

export default App;
