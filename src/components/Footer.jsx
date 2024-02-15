// icons/images.
import LwsLogo from "../assets/logo_light.png";
import YoutubeLogo from "../components/icons/Youtube";
import FacebookLogo from "../components/icons/Facebook";
import InstagramLogo from "../components/icons/Instagram";

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 text-white bg-neutral-800 sm:pt-24">
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
            <img alt="lws" src={LwsLogo} className="max-md:col-span-2" />

            <ul role="list" className="space-y-4">
              <li>
                <a href="#" className="text-sm font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  General
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  Health
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  Science
                </a>
              </li>
            </ul>
            <ul role="list" className="space-y-4">
              <li>
                <a href="#" className="text-sm font-semibold">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold">
                  Technology
                </a>
              </li>
            </ul>
            <ul role="list" className="space-y-4">
              <li>
                <a href="#" className="text-sm">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Manage Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="flex space-x-6">
              <a href="#">
                <InstagramLogo />
              </a>
              <a href="#">
                <FacebookLogo />
              </a>
              <a href="#">
                <YoutubeLogo />
              </a>
            </div>
          </div>

          <div className="flex items-start col-span-12 gap-4 mt-10 xl:col-span-5 xl:mt-0">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">
                Subscribe and be informed first hand about the actual economic
                news.
              </h3>
              <p className="mt-2 text-sm leading-6">
                All the day's headlines and highlights, direct to you every
                morning..
              </p>
            </div>

            <button className="rounded-full bg-[#00D991] px-7 py-2.5 text-xs font-medium text-[#F1EFEA] hover:opacity-80 lg:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-6 lg:mt-12">
        <p className="text-center">
          Copyright ©2023 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
