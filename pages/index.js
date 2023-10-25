import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Updates from "@/components/Updates";
import UpdatesIndex from "@/components/UpdatesIndex";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="top-0 text-base navbar-main">
        <Navbar />
      </div>



      <UpdatesIndex />

      <div className="flex bg-blue-900 text-white footer justify-center">
        <div className="relative bottom-0  w-[50vw] justify-center p-4 font-bold text-base navbar-main">
          <Footer />
        </div>
      </div>
    </>
  );
}
