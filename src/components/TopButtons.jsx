
const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'Bengaluru'
        },
        {
            id: 2,
            name: 'Kolkata'
        },
        {
            id: 3,
            name: 'Delhi'
        },
        {
            id: 4,
            name: 'Lucknow'
        },
        {
            id: 5,
            name: 'Chennai'
        }
    ];

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button
                    key={city.id}
                    className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
                    onClick={()=>setQuery({ q: city.name})}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
