

const Country = ({ country }) => {
    const { flags, name } = country

    return (
        <div className="border-[0.2px] border-gray-400 p-3 shadow-lg">
            <div className="h-[120px] ">
                <img className="w-full h-full" src={flags.png} alt="" />
            </div>
            <div>
                <h2 className="text-xl font-bold">{name.common}</h2>

            </div>
        </div>
    );
};

export default Country;