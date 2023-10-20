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

      <div className="homepage">
        <div className="w-[80%] m-auto pt-16">
          <div className="page-title header text-5xl lg:text-7xl text-center">
            <h1>Sri Sathya Sai Global Council</h1>
          </div>
        </div>
        <div class="mt-10 marquee">
          <p className="font-bold">
            Upcoming Events:{" "}
            <span>
              &nbsp;&nbsp;&nbsp;Oct 2 - Gandhi Jayanthi&nbsp;&nbsp;&nbsp;
            </span>{" "}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 14 - Navarathri
              Begins&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Oct 24 - Vijaya
              Dasami&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </div>
        <div className="w-[90vw] mx-auto pt-16 pb-24">
          <div className="featured-top flex flex-row gap-8 align-middle justify-center">
            <div className="post-deets p-2">
              <div className="post-cat">
                <h2 className="">Updates</h2>
              </div>
              <div className="post-title text-4xl pt-2">
                <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
              </div>
              <div className="post-desc w-96 pt-2 text-justify text-sm">
                <p>
                  This Monday, October 2nd, 2023, a tree plantation drive was
                  held at Raleigh, NC, to contribute to the Sri Sathya Sai
                  Prematharu Initiative. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
              <div className="post-loc pt-2 text-xs">
                <p>Raleigh, NC</p>
              </div>
            </div>
            <div className="post-thumb pt-2">
              <Image
                src="/assets/images/tree1.jpg"
                width={600}
                height={600}
                alt="picture of a tree"
              />
            </div>
          </div>
          <hr className="mt-8 icon2" />
          <hr className="icon" />
          <div className="w-[80vw] mx-auto pt-14 top-4-posts flex flex-row gap-2 align-middle justify-between">
            <div className="post-small">
              <div className="flex flex-col gap-3">
                <div className="post-thumb pt-1">
                  <div className="post-thumb pt-2">
                    <Image
                      src="/assets/images/tree1.jpg"
                      width={250}
                      height={250}
                      alt="picture of a tree"
                    />
                  </div>
                </div>
                <div className="post-deets">
                  <div className="post-cat">
                    <h5 className="">Updates</h5>
                  </div>
                  <div className="post-title w-48">
                    <h4 className="">Prema Tharu: Tree Plantation Drive</h4>
                  </div>
                  <div className="post-small-loc">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-small">
              <div className="flex flex-col gap-3">
                <div className="post-thumb pt-1">
                  <div className="post-thumb pt-2">
                    <Image
                      src="/assets/images/tree1.jpg"
                      width={250}
                      height={250}
                      alt="picture of a tree"
                    />
                  </div>
                </div>
                <div className="post-deets">
                  <div className="post-cat">
                    <h5 className="">Updates</h5>
                  </div>
                  <div className="post-title w-48">
                    <h4 className="">Prema Tharu: Tree Plantation Drive</h4>
                  </div>
                  <div className="post-small-loc">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-small">
              <div className="flex flex-col gap-3">
                <div className="post-thumb pt-1">
                  <div className="post-thumb pt-2">
                    <Image
                      src="/assets/images/tree1.jpg"
                      width={250}
                      height={250}
                      alt="picture of a tree"
                    />
                  </div>
                </div>
                <div className="post-deets">
                  <div className="post-cat">
                    <h5 className="">Updates</h5>
                  </div>
                  <div className="post-title w-48">
                    <h4 className="">Prema Tharu: Tree Plantation Drive</h4>
                  </div>
                  <div className="post-small-loc">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-small">
              <div className="flex flex-col gap-3">
                <div className="post-thumb pt-1">
                  <div className="post-thumb pt-2">
                    <Image
                      src="/assets/images/tree1.jpg"
                      width={250}
                      height={250}
                      alt="picture of a tree"
                    />
                  </div>
                </div>
                <div className="post-deets">
                  <div className="post-cat">
                    <h5 className="">Updates</h5>
                  </div>
                  <div className="post-title w-48">
                    <h4 className="">Prema Tharu: Tree Plantation Drive</h4>
                  </div>
                  <div className="post-small-loc">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-8 icon2" />
          <hr className="icon" />
          <div className="w-[70vw] mx-auto pt-14 older-posts flex flex-col gap-3">
            <div className="post-medium">
              <div className="flex flex-row gap-4 justify-center align-middle">
                <div className="post-deets p-2">
                  <div className="post-cat">
                    <h2 className="">Updates</h2>
                  </div>
                  <div className="post-title text-3xl pt-2">
                    <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
                  </div>
                  <div className="post-desc w-96 pt-2 text-justify text-sm">
                    <p>
                      This Monday, October 2nd, 2023, a tree plantation drive
                      was held at Raleigh, NC, to contribute to the Sri Sathya
                      Sai Prematharu Initiative. Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                  <div className="post-loc pt-2 text-xs">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
                <div className="post-thumb pt-2">
                  <Image
                    src="/assets/images/tree1.jpg"
                    width={500}
                    height={500}
                    alt="picture of a tree"
                  />
                </div>
              </div>
            </div>
            <div className="post-medium">
              <div className="flex flex-row gap-4 justify-center align-middle">
                <div className="post-deets p-2">
                  <div className="post-cat">
                    <h2 className="">Updates</h2>
                  </div>
                  <div className="post-title text-3xl pt-2">
                    <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
                  </div>
                  <div className="post-desc w-96 pt-2 text-justify text-sm">
                    <p>
                      This Monday, October 2nd, 2023, a tree plantation drive
                      was held at Raleigh, NC, to contribute to the Sri Sathya
                      Sai Prematharu Initiative. Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                  <div className="post-loc pt-2 text-xs">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
                <div className="post-thumb pt-2">
                  <Image
                    src="/assets/images/tree1.jpg"
                    width={500}
                    height={500}
                    alt="picture of a tree"
                  />
                </div>
              </div>
            </div>
            <div className="post-medium">
              <div className="flex flex-row gap-4 justify-center align-middle">
                <div className="post-deets p-2">
                  <div className="post-cat">
                    <h2 className="">Updates</h2>
                  </div>
                  <div className="post-title text-3xl pt-2">
                    <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
                  </div>
                  <div className="post-desc w-96 pt-2 text-justify text-sm">
                    <p>
                      This Monday, October 2nd, 2023, a tree plantation drive
                      was held at Raleigh, NC, to contribute to the Sri Sathya
                      Sai Prematharu Initiative. Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                  <div className="post-loc pt-2 text-xs">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
                <div className="post-thumb pt-2">
                  <Image
                    src="/assets/images/tree1.jpg"
                    width={500}
                    height={500}
                    alt="picture of a tree"
                  />
                </div>
              </div>
            </div>
            <div className="post-medium">
              <div className="flex flex-row gap-4 justify-center align-middle">
                <div className="post-deets p-2">
                  <div className="post-cat">
                    <h2 className="">Updates</h2>
                  </div>
                  <div className="post-title text-3xl pt-2">
                    <h2 className="">Prema Tharu: Tree Plantation Drive</h2>
                  </div>
                  <div className="post-desc w-96 pt-2 text-justify text-sm">
                    <p>
                      This Monday, October 2nd, 2023, a tree plantation drive
                      was held at Raleigh, NC, to contribute to the Sri Sathya
                      Sai Prematharu Initiative. Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry.
                    </p>
                  </div>
                  <div className="post-loc pt-2 text-xs">
                    <p>Raleigh, NC</p>
                  </div>
                </div>
                <div className="post-thumb pt-2">
                  <Image
                    src="/assets/images/tree1.jpg"
                    width={500}
                    height={500}
                    alt="picture of a tree"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>&larr; older posts</p>
            </div>
          </div>
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
