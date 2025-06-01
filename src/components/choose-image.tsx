type Props = {
  onChoose: (image: string) => void;
};

export default function ChooseImage({ onChoose }: Props) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChoose(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col size-full justify-center gap-4">
      <p className="text-white text-base font-normal leading-normal px-4 py-2 text-center">
        Check the image you are unsure about
      </p>
      <div className="flex px-4 py-3 justify-center">
        <label className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#264532] text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Choose Image</span>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
