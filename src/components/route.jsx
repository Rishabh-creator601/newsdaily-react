import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../Layout";
import NewsDisplay from "./NewsDisplay";
import About from "./About";







let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route path="sports" element={<NewsDisplay key="sports" cat="sports"/>} />
          <Route path="health" element={<NewsDisplay key="health" cat="health"/>} />
          <Route path="technology"  element={<NewsDisplay key="technology" cat="technology"/>} />
          <Route path="business"  element={<NewsDisplay key="business" cat="business"/>} />
          <Route path="science"   element={<NewsDisplay key="science" cat="science"/>} />
          <Route path="about"   element={<About />} />


        </Route>
    ),{basename:"/newsdaily-react"}
)


export default router;