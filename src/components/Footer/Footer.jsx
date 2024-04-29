import React from "react";
import logo2 from "../../assets/img/logo/logo2.png";
import "./footer.css";

export default function Footer() {
  const handleClick = (e, socialMedia) => {
    e.preventDefault();
    if (e.button === 0) {
      let url;

      switch (socialMedia) {
        case "facebook":
          url = "https://www.facebook.com/minhlakhineee/";
          break;
        case "instagram":
          url = "https://www.instagram.com";
          break;
        case "twitter":
          url = "https://www.twitter.com";
          break;
        case "linkedin":
          url = "https://www.linkedin.com/in/anhtran1610/";
          break;
        case "github":
          url = "https://github.com/Khi137/";
          break;
        default:
          url = "/";
          break;
      }

      window.open(url, "_blank");
    }
  };

  return (
    <div>
      <footer
        style={{ background: "rgba(0, 0, 0, 0.9)" }}
        aria-label="Site Footer"
      >
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-blue-300 items-center sm:justify-start">
                <img src={logo2} className="w-16 h-16" alt="" />
                <span className="font-bold text-2xl"> Cinema</span>
              </div>
              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:mx-0 sm:max-w-xs sm:text-left">
                Mang đến trải nghiệm xem phim thoải mái như ở nhà. Chúng tôi tự tin đem đến dịch vụ tốt nhất cho khách hàng của mình.
              </p>
              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, "facebook")}
                    className="text-blue-300 transition hover:text-blue-300/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, "instagram")}
                    className="text-blue-300 transition hover:text-blue-300/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, "twitter")}
                    className="text-blue-300 transition hover:text-blue-300/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, "github")}
                    className="text-blue-300 transition hover:text-blue-300/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    onClick={(e) => handleClick(e, "linkedin")}
                    className="text-blue-300 transition hover:text-blue-300/75"
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-300">Thông tin thêm</p>
                <nav aria-label="Footer About Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        ReactJS
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Restful API
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Ajax
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        ES6
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-300">
                  Dịch vụ
                </p>
                <nav aria-label="Footer Services Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Google Ads
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-300">
                  Links hỗ trợ
                </p>
                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 font-medium transition hover:text-gray-500 font-medium/75"
                        href="/"
                        onClick={handleClick}
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex justify-center gap-1.5 sm:justify-start"
                        href="/"
                        onClick={handleClick}
                      >
                        <span className="text-gray-500 font-medium transition group-hover:text-gray-500 font-medium/75">
                          Live Chat
                        </span>
                        <span className="relative -mr-2 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-300">Liên hệ</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                      onClick={handleClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-500 font-medium">
                        trantuananh1102015@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                      onClick={handleClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-500 font-medium">
                        0966387342
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <address className="-mt-0.5 not-italic text-gray-500 font-medium">
                      CyberSoft, Ho Chi Minh, Viet Nam
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>
      </footer>
    </div>
  );
}