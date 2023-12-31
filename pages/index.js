import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Updates from "@/components/Updates";
import UpdatesIndex from "@/components/UpdatesIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="top-0 bg-blue-900 p-4 font-bold text-base navbar-main">
        <Navbar />
      </div>

      <div className="h-[90vh] w-[90vw] flex justify-center m-auto">
        <video autoPlay loop muted>
          <source src="https://video.wixstatic.com/video/0aae41_0ebfff106d4b4d299db65f8df48881db/1080p/mp4/file.mp4" />
        </video>
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
