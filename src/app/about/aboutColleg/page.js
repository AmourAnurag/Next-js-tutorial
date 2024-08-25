const { default: Link } = require("next/link")

const College=()=>{
    return (
        <div>
            <h1>
                this is all about college page

            </h1>
            <Link href="/about">Go to back</Link>
            <br/>
            <br/>
            <Link href="/">Go to home page</Link>
        </div>
    )
}
export default College;