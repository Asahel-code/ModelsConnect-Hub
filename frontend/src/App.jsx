import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimaryRoutes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Aos from "aos";
import "aos/dist/aos.css"
import PrimaryPages from "./pages/primary_pages";


function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const queryClient = new QueryClient();

  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<PrimaryPages />}>
              {PrimaryRoutes.map((r, index) => (
                <Route key={index} path={r?.path} element={r?.element} />
              ))}
            </Route>
            {/* <Route path='*' element={<Page404Screen />} /> */}
          </Routes>
        </QueryClientProvider>
      </Router>
    </>
  )
}

export default App
