import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

// this will revalidate the page and it will refetch the data each 1h
// export const revalidate = 3600;

export default function Page({ searchParams }) {
  // set up a filter if not use `all`
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      {/* adding filter client component */}
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        {/* passing filter to server component. */}
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
