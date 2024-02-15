// icons/images.
import PlaceholderImage from "../../assets/placeholder.png";

// react components.
import NewsSkeleton from "./NewsSkeleton";

// utility functions.
import relativeDate from "../../utils/relativeDate";

const RightSide = ({ news }) => {
  const onImageError = (event) => {
    event.target.src = PlaceholderImage;
  };

  return (
    <div className="self-start col-span-12 xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {news?.length === 0 && <NewsSkeleton />}

        {news?.map((newsItem, index) => (
          <div key={index} className="col-span-12 mb-6 md:col-span-8">
            {index === 0 && (
              <img
                alt="thumb"
                className="w-full"
                onError={onImageError}
                src={newsItem?.urlToImage}
              />
            )}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {newsItem?.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                {newsItem?.description}
              </p>
              <p className="mt-5 text-base text-[#94908C]">
                {relativeDate(newsItem?.publishedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
