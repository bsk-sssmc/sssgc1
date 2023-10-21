import Image from "next/image";
export default function Updates() {
  return (
    <div className="homepage">
      <div className="w-[80%] m-auto pt-16">
        <div className="post-cat sri-sathya-sai flex flex-col gap-4 mx-auto text-center justify-center text-7xl pt-20 pb-8">
          <h2>Updates</h2>
        </div>
      </div>
      <div className="w-[90vw] mx-auto pt-8 pb-24">
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
                    This Monday, October 2nd, 2023, a tree plantation drive was
                    held at Raleigh, NC, to contribute to the Sri Sathya Sai
                    Prematharu Initiative. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
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
                    This Monday, October 2nd, 2023, a tree plantation drive was
                    held at Raleigh, NC, to contribute to the Sri Sathya Sai
                    Prematharu Initiative. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
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
                    This Monday, October 2nd, 2023, a tree plantation drive was
                    held at Raleigh, NC, to contribute to the Sri Sathya Sai
                    Prematharu Initiative. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
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
                    This Monday, October 2nd, 2023, a tree plantation drive was
                    held at Raleigh, NC, to contribute to the Sri Sathya Sai
                    Prematharu Initiative. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
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
  );
}
