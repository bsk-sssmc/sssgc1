import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col w-[80vw] justify-center mx-auto">
        <div className="post-cat sri-sathya-sai flex gap-4 mx-auto text-center justify-center text-7xl pt-20 pb-8">
          <h2>Sri Sathya Sai Global Council</h2>
        </div>
      </div>

      <div className="flex flex-col w-[70vw] justify-center mx-auto">
        <div className="post-cat sri-sathya-sai flex m-auto text-center justify-center text-3xl pb-8">
          <h2>Objectives</h2>
        </div>
        <div className="text-xl flex justify-center text-justify w-[60vw] m-auto p-10">
          <p>
            To unify, To strengthen, and To expand &quot;Sri Sathya Sai
            Organizations&quot; globally and firmly establish their connection
            to the sacred Abode of Peace, Prasanthi Nilayam with greater
            coordination and cooperation as directed by Bhagawan Sri Sathya Sai
            Baba!
            <br />
            <br />
            To provide a platform to harmonize the strengths, ideas, and
            initiatives of all Sai organisations founded, nurtured, and guided
            by Bhagawan and draw support from each other&apos;s strengths to
            reach out to humanity through seva and intensify sadhana of every
            office bearer and participating devotee.
          </p>
        </div>
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-3xl pb-8">
          <h2>SSSGC Privileges</h2>
        </div>
        <div className="text-xl flex flex-col justify-center text-justify w-[60vw] m-auto p-10">
          <ul>
            <li>
              <p>
                ONLY SSSGC members will be permitted to perform programs in
                Prasanthi Nilayam.
              </p>
            </li>
            <li>
              <p>
                Priority seating will be available ONLY to SSSGC members in Sai
                Kulwant Hall.
              </p>
            </li>
            <li>
              <p>
                Any Talks in Sai Kulwant hall can be given ONLY by SSSGC
                members.
              </p>
            </li>
            <li>
              <p>
                Any Conferences and workshops can be conducted ONLY by SSSGC
                members in Prasanthi Nilayam.
              </p>
            </li>
            <li>
              <p>
                Any Group singing of Bhajans in the Immediate Divine Presence of
                Bhagawan at Sai Kulwant hall will be available ONLY to SSSGC
                members.
              </p>
            </li>
            <li>
              <p>
                The priority and group accommodation in Prasanthi Nilayam will
                be given only to SSSGC members.
              </p>
            </li>
            <li>
              <p>
                Any Young adults programs will be open ONLY to SSSGC members.
              </p>
            </li>
            <li>
              <p>
                ONLY SSSGC members will be permitted to perform programs in
                Prasanthi Nilayam.
              </p>
            </li>
            <li>
              <p>
                ONLY SSSGC members can directly contact SSSCT office for their
                Prasanthi Pilgrimages.
              </p>
            </li>
            <li>
              <p>
                Devotees don&apos;t need to seek permission from anyone to visit
                Prasanthi Nilayam. Overseas office bearers need not take
                approval for seating positions in Sai Kulwant Hall or for giving
                Aarti to Bhagawan in Sai Kulwant, from International officers
                sitting elsewhere!!
              </p>
            </li>
          </ul>
          <br />
          <br />
          <p>
            Henceforth, The Zonal chairs, Central Coordinators and Country heads
            can decide all these arrangements.
          </p>
          <p>
            SSSGC will facilitate a smooth and hassle free stay at Prasanthi
            Nilayam without any bureaucracy. Under SSSGC, there will not be
            protocols of authority and power but protocols of Love and mutual
            respect.
          </p>
        </div>
        <div className="post-cat sri-sathya-sai flex flex-col m-auto text-center justify-center text-3xl pb-8">
          <h2>Mission</h2>
        </div>
        <div className="text-xl flex flex-col justify-center text-justify w-[60vw] m-auto p-10">
          <p>
            <strong>
              &apos;I have a “Task”: To foster all mankind and ensure for all of
              them lives full of Ananda (bliss). I have a “Vow”: To lead all who
              stray away from the straight path again into goodness and save
              them. I am attached to a “Work” that I love: To remove the
              sufferings of the poor and grant them what they lack.&apos;
              <br />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>- Sri
              Sathya Sai Baba, May 25, 1947
            </strong>
          </p>
          <br />
          <br />
          <p>
            To further the Divine Mission, the Sri Sathya Sai Global Council
            (SSSGC) will act as an Unifying, Coordinating and Supervising body
            while all the Sai organizations work freely in their respective
            domains maintaining their structure and functions intact.
          </p>
          <br />
          <br />
          <p>
            The SSSGC will serve as a unifying forum to ensure that the above
            mission statements of Bhagawan, and indeed the teachings and
            instructions of Bhagawan continue to guide the Sai Organizations He
            has set up. These mission statements are currently being
            implemented; yet greater collaboration and cooperation of the Sai
            organizations will help make the mission more visible, impactful,
            and effective around the world. All stakeholders must work in love
            and unity on the basis of equality.
          </p>
        </div>
        <div className="text-xl flex justify-center text-justify w-[60vw] m-auto p-10">
          <div className="post-thumb pt-2">
            <Image
              src="/assets/images/GCVision.jpg"
              width={800}
              height={800}
              alt="SSSGC Vision"
            />
          </div>
        </div>
      </div>
    </>
  );
}
