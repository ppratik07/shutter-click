'use client'

interface CenteredBannerProps {
    bgColor?: string;
    title: string;
    buttonText?: string;
    onClick?: () => void;
}

export default function CenteredBanner({
    bgColor = "bg-[#8a6c6c]",
    title,
    buttonText,
    onClick,
}: CenteredBannerProps) {
    return (
        <div className={`${bgColor} py-16 w-full text-white text-center`}>
            <h2 className="text-xl md:text-3xl tracking-widest uppercase mb-6">{title}</h2>
            {buttonText && (
                <a
                    onClick={onClick}
                    className="mt-6 inline-flex items-center underline text-white px-6 py-2 tracking-widest cursor-pointer uppercase text-xl md:text-xl hover:opacity-90 transition-all"
                >
                    <span className="mr-3">→</span>
                    {buttonText}
                    <span className="ml-3">←</span>
                </a>
            )}
        </div>
    );
}