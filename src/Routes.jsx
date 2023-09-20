import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CustomLoadingSpinner from "components/Spinner"; // You'll need to implement this component

const StationDetails = React.lazy(() => import("pages/StationDetails"));
const NotFoundStation = React.lazy(() => import("pages/NotFoundStation"));
const Stations = React.lazy(() => import("pages/Stations"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
<React.Suspense fallback={<CustomLoadingSpinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/notfoundstation" element={<NotFoundStation />} />
          <Route path="/stationdetails" element={<StationDetails />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
