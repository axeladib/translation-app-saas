import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  //Get the session id from firebase
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
          -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left-[calc(50%-30rem)] sm:w-[72.1875rem]
          "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.4% 62.4%,52.4% 68.1%,47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
            }}
          />
        </div>
        {/* TODO: Layout for demo */}
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:pb-8">
            {/* TODO: HERO SECTION */}
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Chat with Anyone, anywhere
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                You speak your language, they speak their language.
                <span className="text-indigo-600 dark:text-indigo-500">
                  Let AI handle the translation.
                </span>
              </p>
              {/* TODO: Action Section */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* TODO: GetStarted Placement */}
                {/* FIXME: /chat is not redirect to the signIn Google when user is not login */}
                <Link
                  href="/chat"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus:visible:outline-2 focus:visible:outline-indigo-600"
                >
                  Get started
                </Link>
                {/* TODO: View Pricing Placement */}
                <Link
                  href="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                >
                  ViewPricing <span aria-hidden="true">👈</span>
                </Link>
              </div>
            </div>
            {/* TODO: Demo Section */}
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                {/* TODO: Demo Image */}
                <Image
                  unoptimized
                  src="/profile.png"
                  width={2432}
                  height={1442}
                  alt="App Screenshot"
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Footer */}
        <div
          className="relative inset-x-0 top-[calc(100%-13rem) -z-10 transfor-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
          -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left-[calc(50%-30rem)] sm:w-[72.1875rem]
          "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.4% 62.4%,52.4% 68.1%,47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",
            }}
          />
        </div>
      </div>
    </main>
  );
}
