// icons/images.
import PlaceholderImage from "../../assets/placeholder.png";

// utility functions.
import relativeDate from "../../utils/relativeDate";

const FeatureNews = ({ news }) => {
  const onImageError = (event) => {
    event.target.src = PlaceholderImage;
  };

  return (
    <div className="grid grid-cols-12 col-span-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
            {news?.title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">{news?.description}</p>
        <p className="mt-2 text-base text-[#5C5955]">
          {relativeDate(news?.publishedAt)}
        </p>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <img
          alt="thumb"
          className="w-full"
          src={news?.urlToImage}
          onError={onImageError}
        />
        {news?.author && (
          <p className="mt-2 text-base text-[#5C5955]">
            Illustration: {news?.author}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureNews;
