export async function busArrival(id) {
    const url = `https://api.tfl.gov.uk/StopPoint/${id}/Arrivals`
    let response = await fetch(url);
    let arrivalData = await response.json();

    let busQuant = Math.min(arrivalData.length, 5);

    const busArrivalArr = [];

    for (let i = 0; i < busQuant; i++) {
        busArrivalArr.push([arrivalData[i].lineName, arrivalData[i].destinationName, (Math.floor(arrivalData[i].timeToStation / 60))]);
    }

    var sortedArray = busArrivalArr.sort(function (a, b) {
        return a[2] - b[2];
    });

    return sortedArray;
}
