import Logo from "@/components/custom/logo";
import {footerBottomLinks, footerMenuItems, publicUrl} from "@/config/site-config";

const SiteFooter = () => {

    return (
        <div className="w-[100%] justify-center flex">
            <div className="container max-w-screen-2xl items-center px-6">
                <footer className="w-[100%]">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 pt-4">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <a href={publicUrl || '/'}>
                                    <Logo/>
                                </a>
                            </div>
                        </div>
                        {footerMenuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link: any, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className=" hover:text-primary"
                                        >
                                            <a target={link.blank ? '_blank' : '_self'} href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t py-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>{`© ${new Date().getFullYear()} Rivine dev. All rights reserved.`}</p>
                        <ul className="flex gap-4">
                            {footerBottomLinks.map((link: any, linkIdx) => (
                                <li key={linkIdx} className="underline hover:text-primary">
                                    <a href={link.url} target="_blank">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export { SiteFooter };
