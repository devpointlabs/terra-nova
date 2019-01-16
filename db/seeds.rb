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
    )
    5.times do
      Room.create(
        room_type: 'Single Room',
        cost: 200,
        max_occupancy: 4
        )
        5.times do
  Room.create(
    room_type: 'Double Room',
    cost: 200,
    max_occupancy: 4
    )
        end
      end
    end   
    
puts 'seeded email: terra@nova.com pw: password, 15 rooms created'
      
