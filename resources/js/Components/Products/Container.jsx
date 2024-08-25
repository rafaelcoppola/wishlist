export default function Container({ children }) {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white/50 min-h-screen  selection:bg-[#FF2D20] selection:text-white">
            <div className="w-full max-w-2xl px-6 lg:max-w-7xl mt-20">
                <div className="mt-6">
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 mb-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}