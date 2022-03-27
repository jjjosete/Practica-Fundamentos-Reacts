import { Fragment } from "react/cjs/react.production.min";

function Page({title, children}) {
    return (
        <Fragment>
    <h2>{title}</h2><section>{children}</section>
        </Fragment>

    )
}
export default Page;