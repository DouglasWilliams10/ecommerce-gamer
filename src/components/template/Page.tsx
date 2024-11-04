import Footer from "./Footer";
import Header from "./Header";

export default function Page(props: any) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                background: "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)"
            }}
        >
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}