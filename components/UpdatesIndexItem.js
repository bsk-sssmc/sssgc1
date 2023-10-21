import Image from "next/image";

export default function UpdatesIndexItem(props) {
  return (
    <div className="post-small">
      <div className="flex flex-col gap-3">
        <div className="post-thumb pt-1">
          <div className="post-thumb pt-2">
            <Image
              src={props.imgSrc}
              width={250}
              height={250}
              alt={props.imgAlt}
            />
          </div>
        </div>
        <div className="post-deets">
          <div className="post-cat">
            <h5 className="">{props.postCat}</h5>
          </div>
          <div className="post-title w-48">
            <h4 className="">{props.postTitle}</h4>
          </div>
          <div className="post-small-loc">
            <p>{props.postLoc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
