import { twMerge } from "tailwind-merge";
import { TeachIcon } from "./TeachIcon";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconTypes: React.ElementType;
  }[];
  className ?: string;
  itemsWrapperClassName ?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image: linear-gradient(to_r,transparent,black_10%,balc_90%,transparent)]",
        className,
        
      )}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemsWrapperClassName,)}>
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TeachIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
