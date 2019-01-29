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

Review.create(
  first_name: 'Tyler',
  last_name: 'Cook',
  location: 'New York City, NY',
  title: "Best stay I've had in YellowStone.",
  rating: 5,
  body: "I was hesitant at first to stay in a cabin for our trip, rather than a hotel. I am so glad I didn't choose a regular old hotel. 
  The rooms are so relaxing, the views are beatiful and the neighbors and staff are wonderful. Will stay here again."
)
Review.create(
  first_name: 'Brittany',
  last_name: 'Jones',
  location: 'Birmingham, AL',
  title: "Want to stay cozy in the mountains?",
  rating: 5,
  body: "Then this is where you should stay. Want to feel like you're in the wilderness without feeling lost? 
  Then this IS the place! Thank you to Terra Nova cabins for our amazing getaway this year."
)
Review.create(
  first_name: 'Meghan',
  last_name: 'Higgins',
  location: 'Greenwhich, CT',
  title: "Honeymoon well spent.",
  rating: 5,
  body: "After looking for a few weeks on where we wanted to go for our honeymoon, we were overwhelmed. Too many places, too much money, to many things to do,
    and after awhile, we stopped enjoying the process. Until we found Terra Nova. It was perfect for us in their One Bedroom, and with their amentities and so many
    beautiful hikes and lakes nearby, we thouroughly enjoyed our stay here. 10/10"
)
    
puts 'seeded admin: terra@nova.com pw: password, 15 rooms created, 3 reviews made'
      
