'use client'
import Link from "next/link"

const myLinks = () => {
    return (
    <div className="justify-start mx-auto flex w-2/5 space-x-40">
        <Link href="https://github.com/Andrewab">
            <img src="images/GithubLogo.png" className="w-30 h-28 " alt="Github Logo"/>
        </Link>
        <Link href="https://leetcode.com/lblanche/">
            <img src="images/LeetCodeLogo.png" className="w-30 h-28" alt="Github Logo"/>
        </Link>
        <Link href="https://www.linkedin.com/in/andrew-blanchette-4ab0442ab/">
            <img src="images/LinkedInLogo.png" className="w-30 h-28" alt="Github Logo"/>
        </Link>
    </div>
        )
}

export default myLinks