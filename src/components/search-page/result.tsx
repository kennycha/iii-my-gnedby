import type { SearchResult } from "../../types";
import ResultItem from "./result-item";

type Props = {
  results: SearchResult[];
};

export default function Result({ results }: Props) {
  return (
    <div className="relative flex flex-col bg-[#122118] dark justify-between group/design-root overflow-x-hidden">
      <div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Top results
        </h2>
        {results.map((result) => (
          <ResultItem key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
