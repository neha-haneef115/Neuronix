type SectionTextProps = {
  id?: string;
  title: string;
  highlight?: string;
  description: string;
  className?: string;       // container class
  titleClassName?: string;  // h2 class
  descClassName?: string;   // p class
};

export default function SectionText({
  id,
  title,
  highlight,
  description,
  className = "",
  titleClassName = "",
  descClassName = "",
}: SectionTextProps) {
  return (
    <div id={id} className={`relative text-center py-16 ${className}`}>
    <h2 className={`text-6xl mx-auto leading-[1.3] font-bold mb-6 text-[#EFE5FC] font-poppins ${titleClassName}`}>
  {title}
  {highlight && (
    <span className="block">
      {highlight}
    </span>
  )}
</h2>

      <p
        className={`text-md mx-auto text-gray-300 max-w-xl py-5 leading-relaxed font-poppins ${descClassName}`}
      >
        {description}
      </p>
    </div>
  );
}