
const Footer = () => {
    return (
        <footer className="flex justify-center flex-col text-white px-8 py-16 gap-10 bg-[#e87726] sm:flex-row sm:justify-between md:px-20">

            <div className="flex flex-col gap-10">
                <h1 className=" font-bold text-4xl sm:max-w-[30rem]">Always loaded and profitable</h1>
                <a href="tel:+14094040980" className="text-orange-200 text-center bg-black rounded-lg p-4 font-bold text-xl sm:max-w-[26rem] sm:text-2xl md:text-3xl">Call Now (409) 404-0980</a>
                <h1 className='text-2xl sm:text-3xl sm:text-nowrap font-bold font-serif bg-[#f9ddc9] p-[0.7rem] rounded-full self-start'>
                    <span className='text-blue-900'>E</span><span className='text-orange-500'>Z</span><span className='text-blue-900'>one</span> <span className='text-orange-500'>Trucking</span> <span className='text-blue-900'>Assist</span>
                </h1>
                
                <div className="bg-opacity-10 bg-black p-[0.7rem] rounded text-center font-medium sm:max-w-48 cursor-pointer transition duration-150 ease-in-out active:scale-90">
                    AFFILIATE PROGRAM
                </div>
            </div>

            <div className="flex flex-col gap-12 font-medium sm:items-end">
                <div className="flex-col flex sm:items-end">
                    <p>Email:</p>
                    <a href="mailto:sales@truckingassist.com" className=" underline">dispatch.ezone@gmail.com</a>
                </div>
                <div className="flex-col flex sm:items-end">
                    <p>Phone:</p>
                    <a href="tel:+14094040980" className="underline">409 404 0980</a>
                </div>
                <div className="flex-col flex sm:items-end">
                    <p>Working Hours:</p>
                    <p>Mon - Fri: 7am - 5pm</p>
                    <p>Dispatchers: 24/7</p>
                </div>
                <div className="flex-col flex sm:items-end">
                    <p>Address:</p>
                    <p>34 N Franklin Ave STE 687 Unit 2105</p>
                    <p>Pinedale - 82941</p>
                    <p>WY, USA</p>
                </div>
                <div className=" sm:text-sm lg:text-base">&#169; 2024 EZone Trucking Assist</div>

            </div>
        </footer>
    )
}

export default Footer