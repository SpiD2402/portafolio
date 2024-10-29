
export const Divider = ({title=""}) => {
    return (
        <div className={"mb-3"}>
            <p className={"text-amber-50  info-name"}>{title}</p>
            <div className={"grid grid-cols-12 "}>
                <div className={"col-span-1 border-2  border-cyan-400"}>
                </div>
            </div>
            <div className={"grid grid-cols-12 "}>
                <div className={"col-span-6 "}>
                    <div className={"grid grid-cols-12 mt-2"}>
                        <div className={"col-span-1 border-2 border-cyan-400"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
