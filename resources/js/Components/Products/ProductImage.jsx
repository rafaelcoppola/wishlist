export default function ProductImage(props) {
    const { src, imgFile } = props;

    return (
        <div className="relative flex flex-1 justify-center max-w-[280px] items-stretch">
            <img
                src={`${src}/${imgFile}`}
                className="aspect-video h-[200px] w-full flex-1 rounded-[10px] block"
            />
        </div>
    );
}