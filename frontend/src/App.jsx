import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoutes, OnboardingRoutes, PrimaryRoutes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Aos from "aos";
import "aos/dist/aos.css"
import PrimaryPages from "./pages/primary_pages";
import { ConfigProvider } from 'antd';
import Onboarding from "./pages/onboarding";

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
              <Route path="/onboard" element={<Onboarding />}>
                {OnboardingRoutes.map((r, index) => (
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
