import Organisation from "../subcomponents/Organisation";
import Parcours from "../subcomponents/Parcours";

export default function Programme() {
    return (
        <div className="flex flex-col md:p-10">
            <Organisation />
            <Parcours />
        </div>
    );
}
