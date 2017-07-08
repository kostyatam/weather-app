class Geo {
    getCurrentPosition () {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        .then(position => {
            return {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
        })
    }
}

export default new Geo();