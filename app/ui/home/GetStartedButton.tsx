import Link from "next/link";

export default function GetStartedButton() {
    return (
        <Link
            href="/sign-up"
            className="w-full text-center text-bold p-4 rounded-md bg-primary text-text"
        >
            Get Started Now
        </Link>
    );
}