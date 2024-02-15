import { Fragment } from "react";

// icons/images.
import PlaceholderImage from "../../assets/placeholder.png";

// react components.
import FeatureNews from "./FeatureNews";
import FeatureNewsSkeleton from "./FeatureNewsSkeleton";

// utility functions.
import relativeDate from "../../utils/relativeDate";

const LeftSide = ({ news }) => {
  const onImageError = (event) => {
    event.target.src = PlaceholderImage;
  };

  return (
    <div className="grid self-start grid-cols-12 col-span-12 gap-6 xl:col-span-8">
      {news?.length === 0 && <FeatureNewsSkeleton />}

      {news?.length > 0 && <FeatureNews news={news[0]} />}

      {news?.slice(1).map((newsItem, index) => (
        <Fragment key={index}>
          {index === 0 && (
            <div className="grid grid-cols-12 col-span-12 gap-4 lg:col-span-8">
              <div className="col-span-12 md:col-span-6">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {newsItem?.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">
                  {newsItem?.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {relativeDate(newsItem?.publishedAt)}
                </p>
              </div>

              {newsItem?.urlToImage && (
                <div className="col-span-12 md:col-span-6">
                  <img
                    alt="thumb"
                    className="w-full"
                    onError={onImageError}
                    src={newsItem?.urlToImage}
                  />
                </div>
              )}
            </div>
          )}

          {index !== 0 && (
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
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
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default LeftSide;
