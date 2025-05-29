import type { SearchResult } from "../types";
import SearchResultCard from "./search-result-card";

type Props = {
  results: SearchResult[];
};

export default function ViewResult({ results }: Props) {
  return (
    <div className="relative flex flex-col bg-[#122118] dark justify-between group/design-root overflow-x-hidden">
      <div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Top results
        </h2>
        {results.map((result) => (
          <SearchResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
