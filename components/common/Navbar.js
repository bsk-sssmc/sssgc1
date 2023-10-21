import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-8 justify-start align-middle text-white">
        <div className="cursor-pointer">
          <Link href={`/`} as={`/`} passHref>
            <Image
              src="/assets/images/logo1.png"
              width={120}
              height={120}
              alt="sri sathya sai global council logo"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-3 align-middle">
          <div className="hover:text-slate-300 hover: px-3">
            <Link
              href={`/sri-sathya-sai-baba`}
              as={`/sri-sathya-sai-baba`}
              passHref
            >
              <h2>Sri Sathya Sai</h2>
            </Link>
          </div>
          <div className="hover:text-slate-300 hover: px-3">
            <Link
              href={`/prasanthi-nilayam`}
              as={`/prasanthi-nilayam`}
              passHref
            >
              <h2>Prasanthi Nilayam</h2>
            </Link>
          </div>
          <div className="hover:text-slate-300 px-3">
            <Link href={`/about-us`} as={`/about-us`} passHref>
              <h2>About Us</h2>
            </Link>
          </div>
          <div className="hover:text-slate-300 px-3">
            <Link href={`/activites`} as={`/activities`} passHref>
              <h2>GC Activities</h2>
            </Link>
          </div>
          <div className="hover:text-slate-300 px-3">
            <Link href={`/updates`} as={`/updates`} passHref>
              <h2>Updates</h2>
            </Link>
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
