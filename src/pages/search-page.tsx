import { useState } from "react";
import ChooseImage from "../components/choose-image";
import Navigation from "../components/navigation";
import SearchImage from "../components/search-image";
import ViewResult from "../components/view-result";
import type { SearchResult } from "../types";

export default function SearchPage() {
  const [step, setStep] = useState<"choose" | "search" | "result">("choose");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<SearchResult[] | null>(null);

  const handleCancelButtonClick = () => {
    setStep("choose");
    setSelectedImage(null);
    setResult(null);
  };

  const handleChoose = (image: string) => {
    setSelectedImage(image);
    setStep("search");
  };

  const handleSearch = (results: SearchResult[]) => {
    setResult(results);
    setStep("result");
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="relative flex h-screen flex-col bg-[#122118] dark justify-between group/design-root overflow-x-hidden">
        <div className="flex items-center bg-[#122118] p-4 pb-2 justify-end">
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            onClick={handleCancelButtonClick}
          >
            <div
              className="text-white"
              data-icon="X"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </div>
          </button>
        </div>
        {step === "choose" && <ChooseImage onChoose={handleChoose} />}
        {step === "search" && selectedImage && (
          <SearchImage image={selectedImage} onSearch={handleSearch} />
        )}
        {step === "result" && result && <ViewResult results={result} />}
        <Navigation />
      </div>
    </div>
  );
}
