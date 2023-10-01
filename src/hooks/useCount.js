const fetchDetails = async (UsrName)=>{
    try {
        const res = await fetch(`https://api.github.com/search/issues?q=is:pr+author:${UsrName}+type:pr&per_page=100&labels=true`)
        if(!res.ok) throw new Error("Error")
        const data = await res.json()
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}

const ParentDetails = async (api)=>{
    try {
        const res = await fetch(api)
        if(!res.ok) throw new Error("Error")
        const data = await res.json()
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getCount = async (UsrName) => {
  // const [count, setCount] = useState(0);
    try {
      const data = await fetchDetails(UsrName);
      let cnt = 0;
      // let cntAcc = 0;
      
      for (const item of data.items) {
        const newLink = item.repository_url;
        // console.log(item.closed_at);
        let closedPrDate = item.closed_at.split('T')[0];
        // check only for PRs closed in October and later
        if (closedPrDate.split('-')[1] !== '10' || closedPrDate.split('-')[0] !== '2023') {
          continue;
        }
        // console.log(item.closed_at)
        const repoData = await ParentDetails(newLink);
  
        for (const topic of repoData.topics) {
          if (topic === 'hacktoberfest') {
            cnt++;
            // setCount(count+1);
          }
        }
      }


    return cnt;
    } catch (error) {
      console.error(error);
    }
  };
  
export const getAcceptedCount = async (UsrName) => {
    try {
      const data = await fetchDetails(UsrName);
      let cntAcc = 0;
  
      for (const item of data.items) {
        item.labels.forEach(label => {
          if (label.name === 'hacktoberfest-accepted') {
            cntAcc++;
          }
        });
      }
  
      // console.log(`Total count of "hacktoberfest-accepted": ${cntAcc}`);
    return cntAcc;
    } catch (error) {
      console.error(error);
    }
  };
