class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :room
  
  def self.date_range(start_date, end_date, room )
    start_date = Time.parse(start_date).strftime("%Y-%m-%d")
    end_date = Time.parse(end_date).strftime("%Y-%m-%d")

    select('reservations.id, reservations.start_date as start_date, reservations.end_date as end_date, r.room_type as room, reservations.room_id as room_id')
    .joins('LEFT JOIN rooms r ON r.id = reservations.room_id')
    .where('reservations.start_date BETWEEN ? AND ? AND r.room_type = ?
    OR reservations.end_date BETWEEN ? AND ? AND r.room_type = ?
    OR reservations.start_date <= ? AND reservations.end_date >= ? AND r.room_type = ?', start_date, end_date, room, start_date, end_date, room, start_date, end_date, room
    )
  end

end