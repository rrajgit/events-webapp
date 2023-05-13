import Card from "./Card";
export default function CardModal({ card }) {
    return (
        <>
            {/* The button to open modal */}

            <label
                htmlFor="my-modal-4"
                className="block w-80 bg-transparent border-0	border hover:bg-transparent"
            >
                <Card card={card} />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p className="py-4">Photograph</p>
                    <figure className="max-w-lg">
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={card.image_URL}
                            alt="image description"
                        />
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                            Image caption
                        </figcaption>
                    </figure>
                </label>
            </label>
        </>
    );
}
