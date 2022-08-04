import Search from "./Search";
import Card from "./Card";
export default function Hero() {
  return (
    <div className=''>
      <main className='flex justify-center items-center  flex-col bg-gradient-to-r from-slate-600 to-red-600 text-white h-screen'>
        <div className='text-3xl font-ubuntu w-[520px] text-center font-bold '>
          Get free Photos, Videos, Illustrations and many more just here.
        </div>

        <Search/>
      </main>

      <div className="font-medium text-2xl font-ubuntu px-12 p-4 text-gray-800">Free Stock Photos</div>

      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
