
export default function Header() {

    return (
      <>
        <header className="w-full py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-2 px-4 text-center md:gap-4 md:px-6">
            <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Welcome to BeatMatchApp!</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            Leave the crate digging to us!
            </p>
            </div>
        </div>
        </header>
      </>

    )
}
