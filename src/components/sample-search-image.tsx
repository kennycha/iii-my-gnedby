type Props = {
  src: string;
  onSearch: () => void;
};

export default function SampleSearchImage({ src, onSearch }: Props) {
  const handleSearchButtonClick = async () => {
    onSearch();
  };

  return (
    <div className="flex flex-col size-full justify-center">
      <div className="flex justify-center px-4 py-2">
        <div className="w-48 h-48 rounded-md overflow-hidden border border-white/20">
          <img
            src={src}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#264532] text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]"
          onClick={handleSearchButtonClick}
        >
          <span className="truncate">III My GNEDBY?</span>
        </button>
      </div>
    </div>
  );
}
