/*
    Name:   LEE Oppa
    Email:  lee.oppa.2020
*/

function display_default() {

    console.log("===[START] display_default() ===")

    // Call API and get data
    let api_endpoint_url = "api/info.php"

    // Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // a) Inspect the response
        // console.log(response.data)

        // DOM
        populate_slides(response.data.military_statistics)
        
    })
    .catch(error => {
        console.log(error.message)
    })

    console.log("===[END] display_default() ===")

}


function populate_slides(data) {

    console.log("===[START] populate_slides() ===")

    console.log(data)

    /*
        <div class="carousel-item active" data-bs-interval="2000">
            <img src="flags/usa.jpg" class="flags d-block w-100">
            <div class="carousel-caption d-none d-md-block">
                <h5>USA</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    */

    let str = ''

    let is_first_time = true
    let active = ' active'

    for(country_key in data) {
        console.log("-----------------")
        console.log(country_key)

        let country_details = data[country_key]
        let flag_relative_url = country_details['flag_relative_url']
        let head_of_state = country_details['head_of_state']

        str += `
                <div class="carousel-item${active}" data-bs-interval="3000">
                    <img src="${flag_relative_url}" class="d-block w-100">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${country_key}</h5>
                        <p>${head_of_state}</p>
                    </div>
                </div>
        `

        // Determine if need to add 'active'
        if(is_first_time) {
            is_first_time = false
            active = ''
        }
    }

    // console.log(str)

    // DOM id='slides-box'
    document.getElementById('slides-box').innerHTML = str
    
    console.log("===[END] populate_slides() ===")
}