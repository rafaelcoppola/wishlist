export default function ProductDescription(props) {
    const {name, description} = props;
    return (
        <div className="relative flex items-center gap-6 lg:items-end w-full">
            <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col ">
                <div className="pt-3 sm:pt-5 lg:pt-0">
                    <h2 className="text-xl font-semibold text-black dark:text-white mt-4">
                        {name}
                    </h2>
                    <p className="mt-4 text-sm/relaxed">
                       {description}
                    </p>
                </div>
            </div>
        </div>
    );
}