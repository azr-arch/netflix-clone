interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
    return (
        <div className="relative">
            <input
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                className="
                    block
                    rounded-md
                    px-6 pt-6 pb-1
                    w-full 
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                    md:text-base
                    text-sm
    
                "
                placeholder=" "
            />
            <label
                className="
                absolute
                text-zinc-400
                duration-150
                transform
                -translate-y-3
                scale-75 
                top-4 
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
                md:text-base
                    text-sm
                "
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

Input.displayName = "Input";

export { Input };
