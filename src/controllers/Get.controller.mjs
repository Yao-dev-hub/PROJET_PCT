export const GetExtrait = async (_id) => {
    try {
        const req = await fetch(`http://localhost:2025/api/extrait/${_id}`, {
            method: "GET"
        })
        const res = await req.json()
        if (res.message === "ok") {
            console.log(res.data)
            return res.data
        } else {
            console.log(res.message)
        }
    } catch (error) {
        console.log(error)
    }
}