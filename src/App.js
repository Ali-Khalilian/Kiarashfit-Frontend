import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homePage/Home";
import Articles from "./pages/articlesPage/Articles";
import BodyChanges from "./pages/bodyChangesPage/BodyChanges";
import Contact from "./pages/contactPage/Contact";
import Profile from "./pages/profilePage/Profile";
import Login from "./pages/loginPage/Login";
import RegisterForm from "./components/register/RegisterForm";
import Preloader from "./components/preloader/Preloader";
import NotfoundPage from "./pages/404Page/NotfoundPage";
import AddArticle from "./components/addArticle/AddArticle";
import ReadMore from "./components/readMore/ReadMore";
import AddBody from "./components/addBodyChange/addBody";
import GetPlan from "./components/getPlan/GetPlan";
import AdminPanel from "./pages/adminPanelPage/AdminPanel";
import RequiredAuth from "./components/RequiredAuth";

function App() {
  const [isLoader, setIsLoader] = useState(false);

  // useEffect(() => {
  //   const setLoaderHandle = () => {
  //     setTimeout(() => setIsLoader(false), 1300);
  //   };
  //   setIsLoader(true);
  //   window.addEventListener("load", setLoaderHandle);
  //   setLoaderHandle();
  //   return () => {
  //     window.removeEventListener("load", setLoaderHandle);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      {isLoader ? (
        <Preloader />
      ) : (
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="articles/more/:articleId" element={<ReadMore />} />
            <Route path="/bodyChanges" element={<BodyChanges />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />}>
              <Route path=":userid" />
            </Route>

      
            <Route element={<RequiredAuth allowedRoles={["Admin","User"]} />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/getPlan" element={<GetPlan />} />
            </Route>

            <Route element={<RequiredAuth allowedRoles={["Admin","Editor"]} />}>
              <Route path="/adminpanel" element={<AdminPanel />} />
              <Route path="/articles/add" element={<AddArticle />}>
                <Route path=":articleId" />
              </Route>
              <Route path="/bodyChanges/add" element={<AddBody />}>
                <Route path=":bodyId" />
              </Route>
            </Route>

            <Route path="/404" element={<NotfoundPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>

          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
