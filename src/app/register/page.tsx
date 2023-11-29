import PricingCards from "@/components/PricingCards";
import { authOptions } from "../../../auth";
import { getServerSession } from "next-auth";

async function Register() {
  //TODO: getServerSession use for protected route
  const session = await getServerSession(authOptions);
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets handle your Membership {session?.user?.name?.split(" ")?.[0]}
          </p>
        </div>
        {/* Next Section */}
        <div>
          <svg
            viewBox="0 0 1200 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient>
                <stop stopColor="#7775D6" />
                <stop stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Redirect is set to false to execute ACTION */}
      <PricingCards redirect={false}/>
    </div>
  );
}

export default Register;
