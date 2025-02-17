import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import { HeaderV2 } from "./components/layout/header";
import HeroV9 from "./components/HeroV9";
import Features from "./components/Features";
import Locations from "./components/Locations";
import Awards from "./components/Awards";
import DevOps from "./components/DevOps";
import Reasons from "./components/Reasons";
import Partners from "./components/Partners";
import Bestsellers from "./components/Bestsellers";
import Footer from "./components/Footer";
import CloudVPS from "./pages/compute/cloud-vps";
import CloudVDS from "./pages/compute/cloud-vds";
import StorageVPS from "./pages/compute/storage-vps";
import WindowsVPS from "./pages/compute/windows-vps";
import CPanelVPS from "./pages/cpanel-vps-server";
import ObjectStorage from "./pages/object-storage";
import ObjectStorageOrder from "./pages/object-storage/order";
import VPSOrder from "./pages/order-vps";
import VPSOrderReview from "./pages/order-vps/review";
import Domains from "./pages/domains";
import Pricing from "./pages/pricing";
import RegisterPage from "./pages/register";
import NotFound from "./pages/not-found";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="min-h-screen">
                                <HeaderV2 />
                                <main>
                                    <HeroV9 />
                                    <Features />
                                    <Locations />
                                    <Awards />
                                    <DevOps />
                                    <Reasons />
                                    <Partners />
                                    <Bestsellers />
                                </main>
                                <Footer />
                            </div>
                        }
                    />
                    <Route path="/compute/cloud-vps" element={<CloudVPS />} />
                    <Route path="/compute/cloud-vds" element={<CloudVDS />} />
                    <Route path="/compute/storage-vps" element={<StorageVPS />} />
                    <Route path="/compute/windows-vps" element={<WindowsVPS />} />
                    <Route path="/cpanel-vps-server" element={<CPanelVPS />} />
                    <Route path="/object-storage" element={<ObjectStorage />} />
                    <Route
                        path="/object-storage/order"
                        element={<ObjectStorageOrder />}
                    />
                    <Route path="/order-vps" element={<VPSOrder />} />
                    <Route path="/order-vps/review" element={<VPSOrderReview />} />
                    <Route path="/domains" element={<Domains />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
