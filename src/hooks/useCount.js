const fetchDetails = async (UsrName) => {
    try {
        const res = await fetch(`https://api.github.com/search/issues?q=is:pr+author:${UsrName}+type:pr&per_page=100&labels=true`)
        if (!res.ok) throw new Error("Error")
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getCount = (UsrName) => {
    let count = 0
    fetchDetails(UsrName).then((data) => {
        // console.log(data.items[0].pull_request.merged_at);
        // console.log(data);
        let numberOfPrs = data.total_count
        let prs = data.items
        for (let index = 0; index < numberOfPrs; index++) {
            const PR = prs[index]
            if (PR.author_association === 'CONTRIBUTOR') { // we have to change the if condition later during testing
                // just link this with the database
                count++
            }
        }
    })
    return count
}