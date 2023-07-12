import Card from "@/Components/Card/Card";
import { ContactForm } from "@/Components/ContactForm/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full h-fit flex justify-center items-center relative">
        <Image
          src={"/hero.jpeg"}
          alt="Hero Image"
          className="opacity-60"
          fill
        />
        <div className="flex flex-col justify-center items-center px-3 py-48 md:py-80">
          <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
            <span className="text-primary">MakerFlag</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-90">
            Technology partner for businesses
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center p-0.5 my-5 mr-2 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get Started
            </span>
          </Link>
        </div>
      </div>
      <section className="flex space-between flex-col md:flex-row">
        <Card
          className="my-5 mx-5 py-2"
          title="Website"
          body={
            "Experience the power of a captivating online presence with our top-tier website development service, combining sleek design, seamless functionality, and optimized performance to leave a lasting impression on your audience"
          }
          buttonText={"Learn more"}
          href={"/contact"}
        />
        <Card
          className="my-5 mx-5 py-2"
          title="Mobile Apps"
          body={
            "Transform your vision into a reality with our cutting-edge mobile app development service, delivering customized solutions that engage users, boost brand presence, and exceed your business objectives."
          }
          buttonText={"Learn more"}
          href={"/contact"}
        />
        <Card
          className="my-5 mx-5 py-2"
          title="Hardware"
          body={
            "Unleash innovation with our comprehensive hardware development service, guiding you from concept to realization, delivering high-quality and scalable solutions that redefine industry standards."
          }
          buttonText={"Learn more"}
          href={"/contact"}
        />
      </section>
      {/* Gradient */}
      <div className="bg-gradient-to-b from-black to-gray-800 py-10 w-full"></div>
      <section className="bg-gray-800">
        <figure className="text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;MakerFlag were very professional in their work. The team
              laid out clearly on what to expect at the start and provided
              weekly updates until completion.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6">
            <Image
              className="w-6 h-6 rounded-full"
              src="/wendy.jpeg"
              alt="profile picture"
              width={60}
              height={60}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pl-2 pr-3 font-medium text-gray-900 dark:text-white">
                Wendy Teo
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Founder at LeCréateur Jewelry
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;Exceptional service, unparalleled expertise! This technology
              company surpassed all our expectations. Their team&apos;s
              dedication and technical prowess brought our vision to life.
              Highly recommend their services for anyone seeking cutting-edge
              solutions.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6">
            <Image
              className="w-6 h-6 rounded-full"
              src="/khai.png"
              alt="profile picture"
              width={60}
              height={60}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pl-2 pr-3 font-medium text-gray-900 dark:text-white">
                Khairul Anwar
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Founder at Bakes By NY
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;Outstanding customer support and seamless integration! This
              technology service company truly understands our unique needs.
              They delivered a top-notch solution that streamlined our
              operations and elevated our business to new heights. Their
              professionalism and attention to detail make them our go-to
              partner for all our tech requirements.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6">
            <Image
              className="w-6 h-6 rounded-full"
              src="/jenny.png"
              alt="profile picture"
              width={60}
              height={60}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pl-2 pr-3 font-medium text-gray-900 dark:text-white">
                Jenny Salinas
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Chairperson at Foreward Finance
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
      {/* Gradient */}
      <div className="pt-10 bg-gradient-to-b from-gray-800 to-50% py-10 w-full"></div>
      <section>
        <div className="py-10 my-5">
          <ContactForm headerText={"Get Started"} />
        </div>
      </section>
    </main>
  );
}
