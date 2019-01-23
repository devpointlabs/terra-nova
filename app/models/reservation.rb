class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :room
  
  def self.date_range(start_date, end_date, room )
    start_date = Time.parse(start_date).strftime("%Y-%m-%d")
    end_date = Time.parse(end_date).strftime("%Y-%m-%d")

    rooms_with_reservations =  Room.joins(:reservations).where('reservations.start_date BETWEEN ? AND ? AND rooms.room_type = ?
    OR reservations.end_date BETWEEN ? AND ? AND rooms.room_type = ?
    OR reservations.start_date <= ? AND reservations.end_date >= ? AND rooms.room_type = ?', start_date, end_date, room, start_date, end_date, room, start_date, end_date, room
    ).select('reservations.room_id as room_id')

    Room.where('id not in (?) ', rooms_with_reservations).where(room_type: room)

  end

end