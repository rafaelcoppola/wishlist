export default function ProductImage(props) {
    const {src, imgFile} = props;
    
    return (
        <div
            id="screenshot-container"
            className="relative flex flex-1 justify-center max-w-[280px] items-stretch"
        >
            <img
                src={`${src}/${imgFile}`}
                className="hidden aspect-video h-[200px] w-full flex-1 rounded-[10px]  drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
            />
        </div>
    );
}