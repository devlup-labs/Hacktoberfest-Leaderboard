const fetchDetails = async (UsrName, label) => {
  try {
    const res = await fetch(
      `https://api.github.com/search/issues?q=is:pr+author:${UsrName}+type:pr+label:${label}&per_page=150&labels=true`
    );
    if (!res.ok) throw new Error("Error");

    const data = await res.json();

    // Check if 'items' exists in the data object
    if (data.items) {
      return data.items;
    } else {
      console.log("No items found");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCount = async (UsrName) => {
  try {
    const data = await fetchDetails(UsrName, "BugBounty");
    return data.length; // Return the length of the array
  } catch (error) {
    return 0;
  }
};

export const getAcceptedCount = async (UsrName) => {
  try {
    const data = await fetchDetails(UsrName, "BugBountyVerified");
    return data.length; // Return the length of the array
  } catch (error) {
    return 0;
  }
};
