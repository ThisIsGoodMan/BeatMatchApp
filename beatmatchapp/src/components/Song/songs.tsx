import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { JSX, SVGProps } from "react"

export function Songs() {
  return (
    <div className="grid gap-6 song-list">
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 dark:border-gray-800">
        <div className="p-6 grid gap-4">
          <h1 className="text-3xl font-bold">Search and dig!</h1>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="search">
              Search by song or artist
            </Label>
            <Input id="search" placeholder="Enter a song or artist" type="search" />
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 dark:border-gray-800">
        <div className="p-6 grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-start gap-4">
              <Image
                alt="Album cover"
                className="rounded-lg object-cover"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h2 className="font-bold">Song title</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Artist name</p>
              </div>
            </div>
            <div className="grid gap-0.5">
              <div className="flex items-center gap-2">
                <MusicIcon className="w-4 h-4" />
                <span className="font-semibold">Key:</span>
                <span>C# Minor</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span className="font-semibold">BPM:</span>
                <span>120</span>
              </div>
              <div className="flex items-center gap-2">
                <MoveIcon className="w-4 h-4" />
                <span className="font-semibold">Danceability:</span>
                <span>0.8</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800" />
          <div className="flex items-start gap-4">
            <Image
              alt="Album cover"
              className="rounded-lg object-cover"
              height={64}
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <h2 className="font-bold">Song title</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Artist name</p>
            </div>
          </div>
          <div className="grid gap-0.5">
            <div className="flex items-center gap-2">
              <MusicIcon className="w-4 h-4" />
              <span className="font-semibold">Key:</span>
              <span>D Major</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span className="font-semibold">BPM:</span>
              <span>95</span>
            </div>
            <div className="flex items-center gap-2">
              <MoveIcon className="w-4 h-4" />
              <span className="font-semibold">Danceability:</span>
              <span>0.6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function MoveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}
