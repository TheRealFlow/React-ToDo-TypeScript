export const NewStatus = (status: string) => {
    if (status === "OPEN") {
        return "IN_PROGRESS"
    }
    return "DONE"
}