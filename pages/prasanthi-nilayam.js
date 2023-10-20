import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="top-0 bg-blue-900 p-4 font-bold text-base navbar-main">
        <Navbar />
      </div>
      <div className="flex flex-col w-[80vw] justify-center mx-auto">
        <div className="post-cat sri-sathya-sai flex flex-col gap-4 mx-auto text-center justify-center text-7xl pt-20 pb-8">
          <h2>Prasanthi Nilayam</h2>
        </div>
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-5xl pb-8">
          <h2>Abode of Peace</h2>
        </div>
      </div>

      <div className="flex flex-col w-[70vw] justify-center mx-auto">
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-3xl pb-8">
          <h2>Sai Kulwant Hall</h2>
        </div>
        <div className="text-xl flex justify-center text-justify w-[60vw] m-auto p-10">
          <p>
            Sri Sathya Sai Baba&apos;s Mahasamadhi is in Sai Kulwant Hall. Here
            daily prayers such as Omkaram, Suprabhatam, Vedam and Bhajans are
            offered to Sri Sathya Sai Baba. Swami declared that He will never
            leave Prasanthi Nilayam. Please click here to get latest information
            on Ashram timings and programs.
          </p>
        </div>
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-3xl pb-8">
          <h2>Ashram Facilities</h2>
        </div>
        <div className="text-xl flex justify-center text-justify w-[60vw] m-auto p-10">
          <p>
            For a comfortable stay, there are several facilities provided to
            devotees such as Cloak room & Safe deposit locker, Shopping Centre,
            Book Store, Library and reading room, Laundry service, Porters
            service, Banking and ATM facilities, Bakery, Wheel chair facility
            and emergency medical & Security office.
            <br />
            <br />
            There are three canteens in the Ashram that cater to the varying
            tastes of the thousands who visit Prasanthi Nilayam from all over
            the world. They provide hygienically prepared vegetarian food at
            nominal prices.
            <br />
            <br />
            There are also snack counters, a bakery, coconut stalls, and free
            food prasaadam for the benefit of devotees.
          </p>
        </div>
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-3xl pb-8">
          <h2>Accommodation</h2>
        </div>
        <div className="text-xl flex justify-center text-justify w-[60vw] m-auto p-10">
          <p>
            Advance booking of accommodation may be done online. This facility
            is presently for those seeking to book family accommodation.
            <br />
            <br />
            Online Booking
          </p>
        </div>
      </div>

      <div className="flex bg-blue-900 text-white footer justify-center">
        <div className="relative bottom-0  w-[50vw] justify-center p-4 font-bold text-base navbar-main">
          <Footer />
        </div>
      </div>
    </>
  );
}
