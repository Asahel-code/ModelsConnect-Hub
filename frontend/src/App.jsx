import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminRoutes, AuthRoutes, ClientRoutes, ModelRoutes, OnboardingRoutes, PrimaryRoutes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Aos from "aos";
import "aos/dist/aos.css"
import PrimaryPages from "./pages/primary_pages";
import { ConfigProvider } from 'antd';
import OnboardingPages from "./pages/onboard_pages";
import ModelPages from "./pages/model_pages";
import ClientPages from "./pages/client_pages";
import AdminPages from "./pages/admin_pages";
import AuthMiddleware from "./utils/middleware/AuthMiddleware";
import ModelMiddleware from "./utils/middleware/ModelMiddleware";
import ClientMiddleware from "./utils/middleware/ClientMiddleware";
import AdminMiddleware from "./utils/middleware/AdminMiddleware";

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const queryClient = new QueryClient();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#E59C36',
          },
        }}
      >
        <Router>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<PrimaryPages />}>
                {PrimaryRoutes.map((r, index) => (
                  <Route key={index} path={r?.path} element={r?.element} />
                ))}
              </Route>
              {AuthRoutes.map((r, index) => (
                <Route key={index} path={r?.path} element={r?.element} />
              ))}
              <Route path="/onboard" element={<AuthMiddleware><OnboardingPages /></AuthMiddleware>}>
                {OnboardingRoutes.map((r, index) => (
                  <Route key={index} path={r?.path} element={r?.element} />
                ))}
              </Route>
              <Route path="/model" element={<AuthMiddleware><ModelMiddleware><ModelPages /></ModelMiddleware></AuthMiddleware>}>
                {ModelRoutes.map((r, index) => (
                  <Route key={index} path={r?.path} element={r?.element} />
                ))}
              </Route>
              <Route path="/client" element={<AuthMiddleware><ClientMiddleware><ClientPages /></ClientMiddleware></AuthMiddleware>}>
                {ClientRoutes.map((r, index) => (
                  <Route key={index} path={r?.path} element={r?.element} />
                ))}
              </Route>
              <Route path="/admin" element={<AuthMiddleware><AdminMiddleware><AdminPages /></AdminMiddleware></AuthMiddleware>}>
                {AdminRoutes.map((r, index) => (
                  <Route key={index} path={r?.path} element={r?.element} />
                ))}
              </Route>
              {/* <Route path='*' element={<Page404Screen />} /> */}
            </Routes>
          </QueryClientProvider>
        </Router>
      </ConfigProvider>

    </>
  )
}

export default App
