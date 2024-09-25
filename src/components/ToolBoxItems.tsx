import { TeachIcon } from "./TeachIcon";

export const ToolBoxItems = ({
  items,
}: {
  items: {
    title: string;
    iconTypes: React.ElementType;
  }[]
}) => {
  return (
    <div>
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
  );
};
