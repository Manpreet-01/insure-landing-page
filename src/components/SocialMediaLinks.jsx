import logo from '../images/logo.svg';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Pinterest from './icons/Pinterest';
import Twitter from './icons/Twitter';


export default function SocialMediaLinks() {
    return (
        <div className='text-[--clr5] mt-24 md:mt-32 p-16 pb-8 md:px-0 flex flex-col gap-6 md:flex-row md:justify-between'>

            <div className='h-4 relative z-10'>
                <img src={logo} className='m-auto h-full' alt="logo" />
            </div>

            <div>
                <ul className='flex justify-center gap-x-4'>
                    <li>
                        <a href="#">
                            <Facebook />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Twitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <Pinterest />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Instagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
