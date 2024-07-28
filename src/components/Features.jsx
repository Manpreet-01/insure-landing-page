import iconSnappyProcess from '../images/icon-snappy-process.svg';
import iconAffordablePrices from '../images/icon-affordable-prices.svg';
import iconPeopleFirst from '../images/icon-people-first.svg';

const features = [
    {
        title: "Snappy Process",
        para: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
        icon: iconSnappyProcess
    },
    {
        title: " Affordable Prices",
        para: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
        icon: iconAffordablePrices
    },
    {
        title: "People First",
        para: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
        icon: iconPeopleFirst
    }
];


function Card({ title, para, icon }) {
    return (
        <div className="py-4 px-20 md:px-4 flex flex-col justify-center items-center md:items-start gap-y-4 text-center md:text-start">
            <img src={icon} alt="icon" />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm text-gray-600">{para}</p>
        </div>
    );
}


export default function Features() {
    return (
        <div className='md:mx-32 mt-24 md:mt-72 mb-16 flex flex-col items-center md:items-start'>
            <hr className='mb-8 border-t-2 border-t-[--clr4] w-32' />

            <h2 className='text-5xl mb-8 font-bold text-center'>We’re different</h2>

            <div className='flex flex-col md:grid md:grid-cols-3 gap-8'>
                {features.map(feature => <Card key={feature.title} {...feature} />)}
            </div>
        </div>
    );
}
