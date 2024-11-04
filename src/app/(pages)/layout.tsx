import Page from "@/components/template/Page";

// Pasta com (), informa que não vai aparecer no navegador, não vai considerar na url.
export default function Layout(props: any) {
    return (
        <Page>
            {props.children}
        </Page>
    )
}