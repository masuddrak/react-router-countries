import { useLoaderData } from "react-router-dom";
import Country from "./Country";


const Contries = () => {
    const contries = useLoaderData()
    console.log(contries)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">All Country: {contries.length}</h2>
            <div className="grid grid-cols-5 gap-10 justify-between ">
                {
                    contries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Contries;