User.create(
  first_name: 'Terra',
  last_name: 'Nova',
  email: 'terra@nova.com',
  password: 'password',
)

5.times do
  Room.create(
    room_type: 'Family Room',
    cost: 300,
    max_occupancy: 6,
    description: "Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accomodations supurb amenities, genuine hospitality and dedicated service for an elevated experience in the beautiful Rocky Mountains.",
    size: "600 Square Feet",
    view: "Lake View",
    image: "/assets/interior.jpg",
    bed_type:"King or Queen and two Twin Beds",

    )
end
5.times do
  Room.create(
    room_type: 'Single Room',
    cost: 200,
    max_occupancy: 4,
    description: "Units built in modules of four or six. Each cabin is spacious and modernly furnished two queen beds with private bathrooms equipped with shower or tub/shower, toilet and sink. Typically includes two beds. Televisions, radios, and air conditioning are not available in park lodging.",
    size: "300 Square Feet",
    view: "Forest View",
    image:"/assets/exterior1.jpg", 
    bed_type: "King or Queen",
    )
end
5.times do
  Room.create(
    room_type: 'Double Room',
    cost: 250,
    max_occupancy: 4,
    description: "Historic, simple and plain multi-plex units built in the 1920’s. Furnished with one or two double beds, bathrooms include shower, toilet and sink. Coffee makers are not included in the cabins. Televisions, radios, and air conditioning are not available in park lodging.",
    size: "600 Square Feet",
    view: "Park View",
    image: "/assets/interior.jpg",
    bed_type: "King or Queen and two Twin Beds",
    )
end   
    
puts 'seeded email: terra@nova.com pw: password, 15 rooms created'
      
