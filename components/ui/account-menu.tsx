import { LogOut, UserCircle } from "lucide-react";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
    visible: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="py-3 px-5 rounded-md border bg-black border-gray-800 absolute z-40 top-12 right-0">
            <div className="flex flex-col items-start text-white space-y-4">
                <div className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-md">
                    <UserCircle />
                    Account
                </div>
                <div
                    onClick={() => signOut({ callbackUrl: "/auth" })}
                    className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-md"
                >
                    <LogOut />
                    Logout
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;
