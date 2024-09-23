import Image from "next/image";
import CustomLink from "@/components/ui/CustomLink";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex">
        <div id="navBar" className="flex items-center w-screen px-64 py-2">
            <Link href="/">
                <Image src={"logo-long.svg"} width="100" height="50" alt="Léo Bessin logo"/>
            </Link>
            <nav className="flex justify-center items-center ml-auto">
                <ol className="flex justify-center items-center">
                    <li><CustomLink text="GitHub" link="https://github.com/LeoBessin"/></li>
                    <li><CustomLink text="LinkedIn" link="https://www.linkedin.com/in/l%C3%A9o-bessin/"/></li>
                </ol>
            </nav>
        </div>
      </main>
  );
}
