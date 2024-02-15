import { useContext } from "react";

// react components/
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

// news context.
import { NewsContext } from "../../contexts";

// utility functions.
import splitArray from "../../utils/splitArray";

const News = () => {
  const { news } = useContext(NewsContext);

  const filteredNews = news.filter(({ description }) => description);

  const [dataLeft, dataRight] = splitArray(filteredNews);

  return (
    <main className="my-10 lg:my-14">
      <div className="container grid grid-cols-12 gap-8 mx-auto">
        <LeftSide news={dataLeft} />
        <RightSide news={dataRight} />
      </div>
    </main>
  );
};

export default News;
