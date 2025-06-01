import { generateImageEmbedding } from "../services/embed";
import { searchSimilarAlbums } from "../services/query";
import { useModel } from "../store/model-context";
import type { SearchResult } from "../types";

type Props = {
  image: string;
  onSearch: (results: SearchResult[]) => void;
};

export default function SearchImage({ image, onSearch }: Props) {
  const { model } = useModel();

  const handleSearchButtonClick = async () => {
    if (!model) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const embedding = await generateImageEmbedding(img, model);
    const result = await searchSimilarAlbums(embedding, 0.5, 10);

    onSearch(result);
  };

  return (
    <div className="flex flex-col size-full justify-center gap-4">
      <div className="flex justify-center px-4 py-2">
        <div className="w-48 h-48 rounded-md overflow-hidden border border-white/20">
          <img
            src={image}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#264532] text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]"
          disabled={!model}
          onClick={handleSearchButtonClick}
        >
          <span className="truncate">III My GNEDBY?</span>
        </button>
      </div>
    </div>
  );
}
