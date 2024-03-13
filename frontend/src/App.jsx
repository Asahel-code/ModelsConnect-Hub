import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Aos from "aos";
import "aos/dist/aos.css"
import Home from "./pages/home";


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
            <Route path="/" element={<Home/>}>
            {AuthRoutes.map((r, index) => (
                <Route key={index} path={r?.route} element={r?.element} />
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
