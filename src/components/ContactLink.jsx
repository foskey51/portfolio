import { DiscordIcon, GitHubIcon, GmailIcon, LinkedInIcon } from "../utils/LogoIcon";

const ContactLink = () => {

    return (
        <>
            <div className="flex justify-center items-center space-x-6 w-[90%] pb-8 pt-4 mx-auto md:space-x-2 lg:space-x-3 xl:space-x-5 md:pb-0 md:pt-0 lg:pb-0 lg:pt-0">
                <a className="hover:scale-110" onClick={() => { window.open("https://www.github.com/foskey51") }}>{<GitHubIcon className="size-14" />}</a>
                <a className="hover:scale-110" onClick={() => { window.open("https://www.linkedin.com/in/dhanushhs51") }}>{<LinkedInIcon className="size-14" />}</a>
                <a className="hover:scale-110" onClick={() => { window.open('mailto:dhanushhs51@gmail.com', 'emailWindow') }}>{<GmailIcon className="size-14" />}</a>
                <a className="hover:scale-110" onClick={() => { window.open('https://discord.com/users/1223184263667650639') }}>{<DiscordIcon className="size-14" />}</a>
            </div>
        </>
    );
};

export default ContactLink;