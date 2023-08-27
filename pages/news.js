import { useRef } from "react";
export default function News() {
  const enteredEmailRef = useRef();
  return (
    <>
      <div class="max-w-screen-xl mx-auto ">
        {/* <!-- header --> */}
        <header class="flex items-center justify-between py-2 border-b">
          <a href="/" class="px-2 lg:px-0 uppercase font-bold text-purple-800">
            Chameleon
          </a>
        </header>
        {/* <!-- header ends here --> */}

        <div class="mt-10 px-5 md:px-0">
          <div class="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
            <a
              class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
              style={{ height: "24em" }}
              href="./blog.html"
            >
              <div
                class="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                class="absolute left-0 top-0 w-full h-full rounded-xl z-0 object-cover"
              />
              <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded-full hover:bg-gray-800">
                  Nutrition
                </span>
                <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                  Pellentesque a consectetur velit, ac molestie ipsum. Donec
                  sodales, massa et auctor.
                </h2>
                <div class="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-200 text-sm">
                      {" "}
                      Mike Sullivan{" "}
                    </p>
                    <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              class="w-full md:w-1/3 relative rounded-xl"
              style={{ height: "24em" }}
              href="./blog.html"
            >
              <div
                class="absolute left-0 top-0 w-full h-full z-10"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
                class="absolute left-0 top-0 w-full h-full rounded-xl z-0 object-cover"
              />
              <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded-full hover:bg-gray-800">
                  Science
                </span>
                <h2 class="text-3xl font-semibold text-gray-100 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div class="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-200 text-sm">
                      {" "}
                      Chrishell Staus{" "}
                    </p>
                    <p class="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            {/* <!-- post cards --> */}
            <div class="w-full lg:w-2/3">
              <NewsCard
                title="Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit."
                hoverTitle="Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor"
                description="Duis euismod est quiacus elementum, eu laoreet dolor consectetur. Pellentesques l sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend."
                blogImgUrl="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                author="eduard franz"
                date="14 Aug"
                authorImg="https://randomuser.me/api/portraits/men/86.jpg"
              />
              <NewsCard
                title="Integer commodo, sapien ut vulputate viverra"
                hoverTitle="Integer commodo, sapien ut vulputate viverra"
                description="Nam malesuada aliquet metus, ac commodo augue mollis sit
                      amet. Nam bibendum risus sit amet metus semper
                      consectetur. Proin consequat ullamcorper eleifend. Nam
                      bibendum risus sit amet metus semper consectetur."
                blogImgUrl="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                author="Serenity Hughes"
                date="14 Aug"
                authorImg="https://randomuser.me/api/portraits/women/54.jpg"
              />
              <NewsCard
                title="Suspendisse varius justo eu risus laoreet fermentum non
                      aliquam dolor"
                hoverTitle="Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor"
                description="Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit."
                blogImgUrl="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                author="Eduard Franz"
                date="14 Aug"
                authorImg="https://i1.sndcdn.com/artworks-Nn675O0btow0-0-t500x500.jpg"
              />

              <NewsCard
                title="MIKE TYSON Spence Vs. Crawford??? I GUARANTEE IT'S ENDING IN A KO!!!"
                hoverTitle="a random hover title"
                description="TMZ Sports got Iron Mike's prediction on the massive match just before the two star boxers officially square off Saturday night at T-Mobile Arena in Las Vegas ... and he seemed to kind of like Bud to win it."
                blogImgUrl="https://imagez.tmz.com/image/41/4by3/2023/06/14/41bd0cddfb5c4bcdbf4e2cbca1fb56be_md.jpg"
                author="Mohamed"
                date="14 Aug"
                authorImg="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/1200px-Mike_Tyson_2019_by_Glenn_Francis.jpg"
              />
            </div>

            {/* <!-- right sidebar --> */}
            <div class="w-full lg:w-1/3 px-3">
              {/* <!-- topics --> */}
              <div class="mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                  {" "}
                  Popular Topics{" "}
                </h5>
                <ul>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Nutrition
                      <span class="text-gray-500 ml-auto">23 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                      Food & Diet
                      <span class="text-gray-500 ml-auto">18 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                      Workouts
                      <span class="text-gray-500 ml-auto">34 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                      Immunity
                      <span class="text-gray-500 ml-auto">9 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- divider --> */}
              <div class="border border-dotted"></div>

              {/* <!-- subscribe --> */}
              <div class="p-1 mt-4 mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">
                  {" "}
                  Subscribe{" "}
                </h5>
                <p class="text-gray-600">
                  Subscribe to our newsletter. We deliver the best health
                  related articles to your inbox
                </p>
                <input
                  placeholder="your email address"
                  class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
                  ref={enteredEmailRef}
                />
                <button
                  class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide"
                  onClick={() => {
                    if (enteredEmailRef.current.value.length > 0)
                      alert("Thanks for subscribing");
                    else alert("Please enter a valid email");
                  }}
                >
                  Subscribe
                </button>
              </div>

              {/* <!-- divider --> */}
              <div class="border border-dotted"></div>
            </div>
          </div>
        </div>
        {/* <!-- main ends here --> */}

        {/* <!-- footer --> */}
        <footer class="border-t mt-32 pt-12 pb-32 px-5 mx-auto lg:px-0">
          <div class="flex">
            <div class="w-full md:w-1/3 lg:w-1/4">
              <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div class="w-full md:w-1/3 lg:w-1/4">
              <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Terms & Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" class="block text-gray-600 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function NewsCard(props) {
  const {
    title,
    hoverTitle,
    description,
    blogImgUrl,
    url = "/news",
    author,
    authorImg,
    date,
  } = props;
  return (
    <div
      class="rounded w-full lg:flex mb-10 hover:cursor-pointer"
      onClick={() => (window.location.href = url)}
    >
      {" "}
      {/* redirect to home page on click*/}
      <div
        class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-lg"
        style={{
          backgroundImage: `url(${blogImgUrl})`,
        }}
        title={hoverTitle}
      ></div>
      <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            {title}
          </div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="flex mt-3">
          <img
            src={authorImg}
            class="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p class="font-semibold text-gray-700 text-sm capitalize">
              {" "}
              {author}
            </p>
            <p class="text-gray-600 text-xs"> {date} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestCard(props) {
  return (
    <>
      <section class="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
        <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
              <div
                class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
                  width="540"
                  height="303"
                  alt="Blog post"
                />
              </figure>
            </a>
            <div>
              <header>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Product
                      </a>
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Engineering
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Designing a functional workflow at home.
                  </a>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
                <div>
                  <a
                    class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Chris Solerieu
                  </a>
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 19, 2020</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>

      <div
        x-show="open"
        class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
        x-data="{ open: true }"
      >
        <div class="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div>
            👉{" "}
            <a
              class="hover:underline ml-1"
              href="https://cruip.com/?ref=codepen-cruip-blog-post-hover"
              target="_blank"
            >
              More components on Cruip.com
            </a>
          </div>
          <button class="text-gray-500 hover:text-gray-400 ml-5">
            <span class="sr-only">Close</span>
            <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
