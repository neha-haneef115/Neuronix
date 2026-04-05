type SectionTextProps = {
  id?: string;
  title: string;
  highlight?: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
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
    <div id={id} className={`relative text-center py-10 md:py-16 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl px-4 lg:text-6xl mx-auto leading-[1.3] font-bold mb-4 md:mb-6 text-[#EFE5FC] font-poppins ${titleClassName}`}
      >
        {title}
        {highlight && <span className="block">{highlight}</span>}
      </h2>
      <p
        className={`text-sm sm:text-base mx-auto text-gray-300 max-w-xs sm:max-w-md md:max-w-xl py-4 md:py-5 leading-relaxed font-poppins ${descClassName}`}
      >
        {description}
      </p>
    </div>
  );
}