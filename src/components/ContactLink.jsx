import { DiscordIcon, GitHubIcon, GmailIcon, LinkedInIcon } from "../utils/LogoIcon";

const ContactLink = () => {

    return (
        <>
            <div className="flex justify-center items-center space-x-6 w-[90%] pb-8 pt-4 mx-auto md:space-x-1 lg:space-x-6 md:pb-0 md:pt-0 lg:pb-0 lg:pt-0">
                <a onClick={() => { window.open("https://www.github.com/foskey51") }}>{<GitHubIcon className="size-14" />}</a>
                <a onClick={() => { window.open("https://www.linkedin.com/in/dhanushhs51") }}>{<LinkedInIcon className="size-14" />}</a>
                <a onClick={() => { window.open('mailto:dhanushhs51@gmail.com', 'emailWindow') }}>{<GmailIcon className="size-14" />}</a>
                <a onClick={() => { window.open('') }}>{<DiscordIcon className="size-14" />}</a>
            </div>
        </>
    );
};

export default ContactLink;