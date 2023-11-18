function itinerary_text(travel_start, travel_end, city_origin, city_destination){

    let itinerary = `Estou Viajando de ${city_origin} para ${city_destination} nos dias ${travel_start} ate o ${travel_end} por favor me sugira um roteiro de viagem para cada dia dessa viajem.`

    return itinerary

}

module.exports = {
    itinerary_text
};