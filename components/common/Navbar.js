import Image from "next/image";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-8 justify-start align-middle text-white">
        <div className="cursor-pointer">
          <Image
            src="/assets/images/logo1.png"
            width={120}
            height={120}
            alt="sri sathya sai global council logo"
          />
        </div>
        <div className="flex flex-row gap-3 align-middle">
          <div className="hover:text-slate-300 hover: px-3">
            <h2>Sri Sathya Sai</h2>
          </div>
          <div className="hover:text-slate-300 px-3">
            <h2>About Us</h2>
          </div>
          <div className="hover:text-slate-300 px-3">
            <h2>Community Engagement</h2>
          </div>
          <div className="hover:text-slate-300 px-3">
            <h2>Learning Resources</h2>
          </div>
          <div className="hover:text-slate-300 px-3">
            <h2>Center Contacts</h2>
          </div>
        </div>
      </div>
    </>
  );
}
