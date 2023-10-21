import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PrasanthiNilayam from "@/components/PrasanthiNilayam";
import Activities from "@/components/Activities";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="top-0 bg-blue-900 p-4 font-bold text-base navbar-main">
        <Navbar />
      </div>

      <Activities />

      <div className="flex bg-blue-900 text-white footer justify-center">
        <div className="relative bottom-0  w-[50vw] justify-center p-4 font-bold text-base navbar-main">
          <Footer />
        </div>
      </div>
    </>
  );
}
