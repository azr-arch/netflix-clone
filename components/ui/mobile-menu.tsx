import { AlignLeft, TrendingUp, Film, Clapperboard, Home } from "lucide-react";

interface MobileMenuProps {
    visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) return null;
    return (
        <div className="bg-black min-w-[12rem] absolute top-8 left-0 flex flex-col border-2 border-gray-800 px-2 py-4">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-white gap-2  hover:underline flex items-center">
                    <Home className="text-white/80" />
                    Home
                </div>
                <div className="px-3 text-center text-white gap-2  hover:underline flex items-center">
                    <Clapperboard className="text-white/80" />
                    TV Shows
                </div>
                <div className="px-3 text-center text-white gap-2  hover:underline flex items-center">
                    <Film className="text-white/80" />
                    Movies
                </div>
                <div className="px-3 text-center text-white gap-2  hover:underline flex items-center">
                    <TrendingUp className="text-white/80" />
                    New & Popular
                </div>
                <div className="px-3 text-center text-white  gap-2 hover:underline flex items-center">
                    <AlignLeft className="text-white/80" />
                    My List
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
