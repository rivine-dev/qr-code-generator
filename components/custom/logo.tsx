import Image from "next/image"

export default function Logo() {
    return (
        <div className="flex row items-center justify-center">
            <Image
                className="invert dark:invert-0"
                src={"/logo/logoqr.png"}
                alt="Logo"
                width={30}
                height={30}
                priority
            />
            <span className="pl-2 font-semibold">Rivine QR Code Generator</span>
        </div>
    )
}