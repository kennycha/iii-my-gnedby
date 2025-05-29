import type { SearchResult } from "../types";

type Props = {
  result: SearchResult;
};

export default function SearchResultCard({ result }: Props) {
  const { similarity, title, artist, artworkUrl } = result;

  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-xl">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-[#96c5a9] text-sm font-normal leading-normal">
            {(similarity * 100).toFixed(2)}% match
          </p>
          <p className="text-white text-base font-bold leading-tight">
            {title}
          </p>
          <p className="text-[#96c5a9] text-sm font-normal leading-normal">
            {artist}
          </p>
        </div>
        <img className="w-[70px] h-[70px]" src={artworkUrl} />
      </div>
    </div>
  );
}
