import Footer from "./Footer";
import Header from "./Header";

export interface PageProps {
    className?: string
    children: any
    noHeader?: boolean
    noFooter?: boolean
    noContainer?: boolean
    noPadding?: boolean
}

export default function Page(props: PageProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)"
            }}
        >
            {props.noHeader ? null : <Header />}
            <main
                className={`
                    flex-1 flex flex-col ${props.className ?? ''}
                    ${props.noContainer ? '' : 'container'}
                    ${props.noPadding ? '' : 'py-10'}
                `}
            >
                {props.children}</main>

            {props.noFooter ? null : <Footer />}
        </div>
    )
}