import Link from "next/link";

const myLinks = () => {
    return (
        <div className="justify-start mx-auto flex space-x-2">
            <Link href="https://github.com/Andrewab">
                <img src="images/GithubLogo.png" className="w-10 h-10 hover:pulse" alt="Github Logo"/>
            </Link>
            <Link href="https://leetcode.com/lblanche/">
                <img src="images/LeetCodeLogo.png" className="w-10 h-10 hover:pulse" alt="LeetcodeLogo Logo"/>
            </Link>
            <Link href="https://www.linkedin.com/in/andrew-blanchette-4ab0442ab/">
                <img src="images/LinkedInLogo.png" className="w-10 h-10 hover:pulse" alt="LinkedIn Logo"/>
            </Link>
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        filter: hue-rotate(0deg);
                    }
                    100% {
                        filter: hue-rotate(360deg);
                    }
                }

                .hover\:pulse:hover {
                    animation: pulse 2s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default myLinks;
