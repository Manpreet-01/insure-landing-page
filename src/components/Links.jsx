
const linksData = [
    {
        title: "Our company",
        links: ["How we work", "Why Insure?", "View plans", "Reviews"],
    },
    {
        title: "Help me",
        links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"],
    },
    {
        title: "Contact",
        links: ["Sales", "Support", "View plans", "Live chat"],
    },
    {
        title: "Others",
        links: ["Careers", "Press", "Licenses"],
    }

];

function LinksGroup({ title, links }) {
    return (
        <div className="flex flex-col items-center font-bold">
            <h2 className="text-[--clr4] uppercase my-6">{title}</h2>

            <div className="flex flex-col gap-2 text-[--clr1] hover:text-black">
                {links.map(link => <button className="hover:underline" key={link}>{link}</button>)}
            </div>
        </div>
    );
}

export default function Links() {
    return (
        <div className="flex flex-col gap-y-8 md:grid grid-cols-4 md:mr-32">
            {linksData.map(groupedData => <LinksGroup {...groupedData} />)}
        </div>
    );
}
